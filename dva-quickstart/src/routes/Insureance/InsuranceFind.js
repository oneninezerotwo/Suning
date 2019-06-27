import React from 'react';
import { connect } from 'dva';
import InsHeader from '../../components/InsHeader/InsHeader';
import InsFoot from '../../components/InsFoot/InsFoot';
import Topnew from '../../components/InsuranceFind/Topnew';
import './Find.css';
import './header.css';
import './InsFoot.css';
// import { Router, Route, Switch } from 'dva/router';

class InsuranceFind extends React.Component {

    render() {
        return (
            // <div>is</div>
            <div>
                <InsHeader />
                <Topnew />
                <InsFoot />

            </div>

        )
    }
}

// IndexPage.propTypes = {
// };

export default connect((state) => {
    return state
})(InsuranceFind);
