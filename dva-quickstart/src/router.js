import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import Insurance from './routes/Insureance/Insurance';
import InsuranceList from './routes/Insureance/InsuranceList';
import InsuranceFind from './routes/Insureance/InsuranceFind';
import MyInsurance from './routes/Insureance/MyInsurance';
import Home from './routes/Home/Home';

import Login from './routes/Login/Login';

import Register from './routes/Register/Register';
import My from './routes/My/My';
import Financial from './routes/Financial/Financial'
import FinancialMost from './components/FinancialMost/FinancialMost'
import FinancialMy from './components/FinancialMy/FinancialMy'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />
        <Route path="/my" component={My} />
        <Route path="/financial" component={Financial} />
        <Route path="/most" component={FinancialMost} />
        <Route path="/financialMy" component={FinancialMy} />


        <Route path="/Insurance" component={Insurance} />
        <Route path="/InsuranceList" component={InsuranceList} />
        <Route path="/InsuranceFind" component={InsuranceFind} />
        <Route path="/MyInsurance" component={MyInsurance} />


      </Switch>

    </Router>
  );
}

export default RouterConfig;
