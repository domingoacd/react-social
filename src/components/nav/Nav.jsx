import React from 'react';
import {NavBar, NavImage} from './navStyles';
import homeImage from '../../images/home.png';
import profileImage from '../../images/profile.png';
import settingsImage from '../../images/setttings.png';

const Nav = () => {
  return(
    <NavBar>
      <NavImage src={homeImage}/>
      <NavImage src={profileImage}/>
      <NavImage src={settingsImage}/>
    </NavBar>
  );
}

export default Nav;