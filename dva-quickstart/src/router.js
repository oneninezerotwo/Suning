import React from 'react';

import { Router, Route, Switch } from 'dva/router';
import Home from './routes/Home/Home';



import Login from './routes/Login/Login';
import Insurance from './routes/Insureance/Insurance';
import InsuranceList from './routes/Insureance/InsuranceList';
import InsuranceFind from './routes/Insureance/InsuranceFind';
import MyInsurance from './routes/Insureance/MyInsurance';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>

        <Route path="/" exact component={Home} />


        <Route path="/Insurance" component={Insurance} />
        <Route path="/InsuranceList" component={InsuranceList} />
        <Route path="/InsuranceFind" component={InsuranceFind} />
        <Route path="/MyInsurance" component={MyInsurance} />
        <Route path="/login" component={Login} />

      </Switch>

    </Router>
  );
}

export default RouterConfig;
