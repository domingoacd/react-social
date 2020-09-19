import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  right: 1rem;
  bottom: calc(${props => props.theme.layout.navHeight} + 1rem);
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  font-size: 5rem;
  font-weight: lighter;
  cursor: pointer;
  outline: none;
  transition: background 0.3s, color 0.3s;
  color: ${props => props.theme.colors.textPrimary};
  background-color: ${props => props.theme.colors.secondary};

  &:hover {
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.textPrimary};
  }
`;