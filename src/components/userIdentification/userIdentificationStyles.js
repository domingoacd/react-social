import styled from 'styled-components';

export const IdWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

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