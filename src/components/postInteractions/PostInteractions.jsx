import React, {useState} from 'react';
import {
  InteractionsWrapper, 
  Interaction, 
  InteractionImage, 
  InteractionAmmount} 
  from './postInteractionsStyles';
import likes from '../../images/like.png';
import comments from '../../images/comment.png';
import handler from '../../server/increase.js';

const PostInteractions = () => {
  const [likesAmmount, increaseLikes] = useState(0);

  const  increment = ()  => {
    console.log("jejeje")
    console.log(handler("INCREMENT", likesAmmount));
    increaseLikes(handler("INCREMENT", likesAmmount));
  }

  return(
    <InteractionsWrapper onClick={increment}>
      <Interaction>
        <InteractionImage src={likes}/>
        <InteractionAmmount>{likesAmmount}</InteractionAmmount>
      </Interaction>
      <Interaction>
        <InteractionImage src={comments}/>
        <InteractionAmmount>3</InteractionAmmount>
      </Interaction>

    </InteractionsWrapper>
  );
}

export default PostInteractions;