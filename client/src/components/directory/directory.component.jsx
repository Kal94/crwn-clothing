import React from 'react';

import Menuitem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {
      sections.map(({id, ...sectionProps}) => (
        <Menuitem key={id} {...sectionProps} />
      ))
    } 
  </DirectoryMenuContainer>
)

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
})

 export default connect(mapStateToProps)(Directory);