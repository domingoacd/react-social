import styled from 'styled-components';

export const Banner = styled.header`
  position: relative;
  width: 100%;
  height: 10rem;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SettingsContainer = styled.div`
  width: 90%;
  max-width: 30rem;
  border-radius: 10px;
  margin-top: 5rem;
  padding: 2rem;
  color: ${props => props.theme.colors.textPrimary};
  border: 1px solid ${props => props.theme.colors.textPrimary};
`;

export const SettingOption = styled.details`
  border-bottom: 1px solid ${props => props.theme.colors.textPrimary};

  &:not(:nth-child(1)) {
    margin-top: 2rem;
  }

  
  
`;

export const SettingOptionTitle = styled.summary`
  position: relative;
  padding: 0 0.5rem 1.5rem;
  padding-bottom: 0;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  &::-webkit-details-marker {
    position: relative;
    left: 0.5rem;
    top: 0.1rem;
    width: 0.4rem;
    height: 0.6rem;
  }

  &:focus {
    outline: none;
  }
`;

export const OptionContent = styled.div`
  padding: 0.5rem 1.5rem;
`;