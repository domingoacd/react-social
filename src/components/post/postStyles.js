import styled from 'styled-components';

export const PostWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 2px solid ${props => props.theme.colors.gray};
`;

export const PostImage = styled.img`
  display: block;
  width: 100%;
`;