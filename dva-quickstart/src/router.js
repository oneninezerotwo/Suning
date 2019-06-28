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

import Welfare from './components/Welfare/Welfare'
import Foundindex from './routes/Fund/Fundindex/Fundindex'
import Fundmore from './routes/Fund/Fundmore/Fundmore'
import Fundguji from './routes/Fund/Fundguji/Fundguji'
import Fundzhaiquan from './routes/Fund/Fundzhaiquan/Fundzhaiquan'
import Funddingtou from './routes/Fund/Funddingtou/Funddingtou'
import Fundgold from './routes/Fund/Fundgold/Fundgold'
import Funddream from './routes/Fund/Funddream/Funddream'
import Fundzhitou from './routes/Fund/Fundzhitou/Fundzhitou'
import Fundcomb from './routes/Fund/Fundcomb/Fundcomb'
import Fundcomb2 from './routes/Fund/Fundcomb/Fundcomb2'
import Fundzhineng from './routes/Fund/Fundzhineng/Fundzhineng'
import Fundbangdan from './routes/Fund/Fundbangdan/Fundbangdan'
import FundSearch from './routes/Fund/FundSearch/FundSearch'
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

        <Route path="/Welfare" component={Welfare} />

        <Route path="/Foundindex" component={Foundindex} />
        <Route path="/优选股基" component={Fundguji} />
        <Route path="/债券基金" component={Fundzhaiquan} />
        <Route path="/基金定投" component={Funddingtou} />
        <Route path="/黄金" component={Fundgold} />
        <Route path="/梦想定投" component={Funddream} />
        <Route path="/苏宁智投" component={Fundzhitou} />
        <Route path="/组合专区" component={Fundcomb} />
        <Route path="/组合专区/全部组合" component={Fundcomb2} />
        <Route path="/基金诊断" component={Fundzhineng} />
        <Route path="/特色榜单" component={Fundbangdan} />
        <Route path="/更多" component={Fundmore} />
        <Route path="/FundSearch" component={FundSearch} />
      </Switch>

    </Router>
  );
}

export default RouterConfig;
