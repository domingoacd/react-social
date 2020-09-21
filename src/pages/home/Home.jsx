import React from 'react';
import Post from '../../components/post/Post';
import PostButton from '../../components/postButton/PostButton';
import { HomeTitle } from './homeStyles';

const Home = () => {
  return(
    <React.Fragment>
      <HomeTitle>Social Platform</HomeTitle>
      <Post />
      <PostButton />
    </React.Fragment>
  );
}

export default Home;
