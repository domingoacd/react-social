import React from 'react';
import Post from '../post/Post';
import PostButton from '../postButton/PostButton';
import Nav from '../nav/Nav';

const Home = () => {
  return(
    <React.Fragment>
      <Post />
      <PostButton />
      <Nav />
    </React.Fragment>
  );
}

export default Home;
