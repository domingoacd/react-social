import React, {useState} from 'react';
import {
  InteractionsWrapper, 
  Interaction, 
  InteractionImage, 
  InteractionAmmount} 
  from './postInteractionsStyles';
import likes from '../../images/like.png';
import comments from '../../images/comment.png';

const PostInteractions = () => {
  const [likesAmmount, increaseLikes] = useState(0);

  return(
    <InteractionsWrapper>
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