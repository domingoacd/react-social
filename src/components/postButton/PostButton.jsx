import React from 'react';
import {Button} from './postButtonStyles';

const PostButton = () => {
  function change() {
    console.log('clicked');
  }

  return(
    <Button onClick={change}>+</Button>
  );
}

export default PostButton;