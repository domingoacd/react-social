import React from 'react';
import { Banner, UserDescription, ProfileTopMenu, TopMenuItem } from './profileStyles';
import UserIdentification from '../../components/userIdentification/UserIdentification';
import bannerImage from '../../images/post_image.png';

const Profile = () => {
  return (
    <React.Fragment>
      <Banner background={bannerImage}> 
        <UserIdentification isProfilePage/>
      </Banner>
      <UserDescription>
        Fugiat aliqua aute cillum veniam ipsum quis fugiat enim labore eiusmod incididunt Lorem do tempor.
      </UserDescription>
      <ProfileTopMenu>
        <TopMenuItem active><a href="#">Posts</a></TopMenuItem>
        <TopMenuItem><a href="/about">About me</a></TopMenuItem>
        <TopMenuItem><a href="/likes">Likes</a></TopMenuItem>
      </ProfileTopMenu>
      
    </React.Fragment>
  );
}

export default Profile;