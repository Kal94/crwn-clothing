import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ value, ...otherProps }) => (
    <button className="custom-button" { ...otherProps }>
        { value }
    </button>
)

export default CustomButton