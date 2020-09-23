import styled from 'styled-components';

export const Banner = styled.header`
  position: relative;
  width: 100%;
  height: 10rem;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const UserDescription = styled.p`
  width: 90%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.textPrimary};
`;

export const ProfileTopMenu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid ${props => props.theme.colors.textPrimary};
`;

export const TopMenuItem = styled.li`
  font-size: 1.1rem;
  list-style: none;
  padding: 1rem;
  padding-bottom: 0;
  color: ${props => props.theme.colors.textPrimary};
  border-color: ${props => props.theme.colors.textPrimary};
  border-bottom-color: ${props => props.theme.colors.main};

  ${props => props.active && 
  `
    border-radius: 10px;
    border-width: 2px;
    border-style: solid;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;
    top: 0.1rem;
  `}
`;