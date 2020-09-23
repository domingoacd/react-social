import React from 'react';
import { Banner, SettingsContainer, SettingOption, SettingOptionTitle, OptionContent } from './settingsStyles';
import UserIdentification from '../../components/userIdentification/UserIdentification';
import bannerImage from '../../images/post_image.png';

const Settings = () => {
  return(
    <React.Fragment>
      <Banner background={bannerImage}>
        <UserIdentification isProfilePage />
      </Banner>

      <SettingsContainer>
        <SettingOption>
          <SettingOptionTitle>Change pictures</SettingOptionTitle>
          <OptionContent>Texting</OptionContent>
        </SettingOption>
        <SettingOption>
          <SettingOptionTitle>Change personal info</SettingOptionTitle>
          <OptionContent>Texting</OptionContent>
        </SettingOption>
        <SettingOption>
          <SettingOptionTitle>Change user name</SettingOptionTitle>
          <OptionContent>Texting</OptionContent>
        </SettingOption>
      </SettingsContainer>
    </React.Fragment>

  );
}

export default Settings;