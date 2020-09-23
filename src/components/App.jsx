import React from 'react';
import MainContainer from './containers/MainContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Theme from './theme/Theme';
import GlobalStyles from './theme/GlobalStyles';
import Settings from '../pages/settings/Settings';
import Profile from '../pages/profile/Profile';
import Home from '../pages/home/Home';

const App = () => {
  return(
    <Theme>
      <GlobalStyles />
        <BrowserRouter>
          <MainContainer>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/settings" component={Settings}/>
            </Switch>
          </MainContainer>
        </BrowserRouter>
    </Theme>
  );
}

export default App;