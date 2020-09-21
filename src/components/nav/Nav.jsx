import React from 'react';
import { Link } from 'react-router-dom';
import {NavBar, NavImage} from './navStyles';
import homeImage from '../../images/home.png';
import profileImage from '../../images/profile.png';
import settingsImage from '../../images/setttings.png';

const Nav = () => {
  return(
    <NavBar>
      <Link to="/">
        <NavImage src={homeImage} />
      </Link>
      <Link to="profile">
        <NavImage src={profileImage}/>
      </Link>
      <Link to="settings">
        <NavImage src={settingsImage}/>
      </Link>
    </NavBar>
  );
}

export default Nav;