import styled from 'styled-components';

export const InteractionsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0; 
  width: 100%;
  display: flex;
  padding: 0.5rem 2rem;
  background-color: rgba(0,0,0,0.5);
`;

export const Interaction = styled.div`
  position: relative;
  cursor: pointer;
  &:nth-last-child(1) {
    margin-left: 1.5rem;
  }
`;

export const InteractionImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const InteractionAmmount = styled.span`
  position: absolute;
  bottom: -0.1rem;
  right: -0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  border-radius: 50%;
  color: ${props => props.theme.colors.textPrimary};
  background-color: ${props => props.theme.colors.secondary};

`;