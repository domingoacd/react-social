import React from 'react';
import { IdWrapper, UserPic, RightSide, UserName, UserHash } from './userIdentificationStyles';
import img from '../../images/user_picture.png';
const UserIdentification = () => {
  return(
    <IdWrapper>
      <UserPic src={img} />
      <RightSide>
        <UserName>Jhon Doe</UserName>
        <UserHash>@TheJhonDoe</UserHash>
      </RightSide>
    </IdWrapper>
  );
}

export default UserIdentification;