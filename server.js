const   express = require('express'),
        app = express(),
        cors = require('cors'),
        bodyParser = require('body-parser'),
        path = require('path'),
        port = process.env.PORT || 4000;

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.post('/payment', (req, res)=> {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'gbp',
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).send({error: stripeErr});
        } else {
            res.status(200).send({ success: stripeRes});
        }
    });
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});


