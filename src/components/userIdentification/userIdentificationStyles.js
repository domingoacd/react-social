import styled from 'styled-components';

export const UserPic = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;

export const UserName = styled.h5`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textPrimary};
`;

export const UserHash = styled.span`
  font-size: 0.7rem;
  color: ${props => props.theme.colors.textSecondary};
`;

export const IdWrapper = styled.div`
         width: 100%;
         display: flex;
         align-items: center;

         ${({ isProfile }) =>
           isProfile &&
           `
          position: absolute;
          bottom: -2rem;
          left: -1rem;
          align-items: flex-end;
          ${UserPic} {
            position: relative;
            z-index: 2;
            width: 6rem;
            height: 6rem;
          }

          ${RightSide} {
              position: relative;
              right: 3rem;
              bottom: 0.2rem;
              padding: 0.5rem;
              padding-left: 3rem;
              margin-left: 0;
              border-radius: 5px;
              background-color: rgba(0,0,0,0.6);
          }

          ${UserName} {
            font-size: 1.8rem;
          }

          ${UserHash} {
            font-size: 0.9rem;
          }
        `}
       `;