import React from 'react';
import UserIdentification from '../userIdentification/UserIdentification';
import { PostWrapper, PostImage } from './postStyles';
import image from '../../images/post_image.png';


const Post = () => {
  return (
    <PostWrapper>
      <UserIdentification />
      <PostImage src={image}/>
    </PostWrapper>
  );
}

export default Post;