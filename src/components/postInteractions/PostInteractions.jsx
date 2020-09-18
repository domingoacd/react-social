import React from 'react';
import {
  InteractionsWrapper, 
  Interaction, 
  InteractionImage, 
  InteractionAmmount} 
  from './postInteractionsStyles';
import likes from '../../images/like.png';
import comments from '../../images/comment.png';

const PostInteractions = () => {
  return(
    <InteractionsWrapper>
      <Interaction>
        <InteractionImage src={likes}/>
        <InteractionAmmount>3</InteractionAmmount>
      </Interaction>
      <Interaction>
        <InteractionImage src={comments}/>
        <InteractionAmmount>3</InteractionAmmount>
      </Interaction>

    </InteractionsWrapper>
  );
}

export default PostInteractions;