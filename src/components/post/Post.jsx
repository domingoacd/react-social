import React from 'react';
import UserIdentification from '../userIdentification/UserIdentification';
import { PostWrapper, PostImage, PostText, PostTop } from './postStyles';
import image from '../../images/post_image.png';


const Post = () => {
  return (
    <PostWrapper>
      <PostTop>
        <UserIdentification />
        <PostText > Cillum nisi incididunt dolore in occaecat officia reprehenderit anim. </PostText>
      </PostTop>
      <PostImage src={image}/>
    </PostWrapper>
  );
}

export default Post;