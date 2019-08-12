import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './store';

import { AsyncLoadable } from 'cloud-xinyi';

// 登录页面
const Login = AsyncLoadable(() => import('./views/Login'));

function App() {
  return (
    <Provider {...store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
