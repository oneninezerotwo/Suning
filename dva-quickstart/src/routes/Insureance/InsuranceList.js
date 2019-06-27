import React from 'react';
import { connect } from 'dva';
import InsHeader from '../../components/InsHeader/InsHeader';
import InsFoot from '../../components/InsFoot/InsFoot';
import InsListChannel from '../../components/InsuranceList/InsListChannel';
import InsListProAll from '../../components/InsuranceList/InsListProAll';
import './InsList.css';
import './header.css';
import './InsFoot.css';
// import { Router, Route, Switch } from 'dva/router';

class InsuranceList extends React.Component {

    render() {
        return (
            // <div>is</div>
            <div>
                <InsHeader />
                <InsListChannel />
                <InsListProAll />
                <InsFoot />

            </div>

        )
    }
}

// IndexPage.propTypes = {
// };

export default connect((state) => {
    return state
})(InsuranceList);
