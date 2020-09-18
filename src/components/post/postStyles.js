import styled from 'styled-components';

export const PostWrapper = styled.div`
  position: relative;  
  width: 100%;
  max-width: 40rem;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.gray};
`;

export const PostTop = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
`;

export const PostImage = styled.img`
  display: block;
  width: 100%;
`;

 
export const PostText = styled.p`
  color: ${props => props.theme.colors.textPrimary};
`;