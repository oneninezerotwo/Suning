import React from 'react';
import { connect } from 'dva';
import InsHeader from '../../components/InsHeader/InsHeader';
import InsFoot from '../../components/InsFoot/InsFoot';
import MyInscont from '../../components/MyInsurance/MyInscont';

import './header.css';
import './InsFoot.css';
import './MyInsurance.css';
// import { Router, Route, Switch } from 'dva/router';

class MyInsurance extends React.Component {

    render() {
        return (
            // <div>is</div>
            <div>
                <InsHeader />
                <MyInscont />
                <InsFoot />

            </div>

        )
    }
}

// IndexPage.propTypes = {
// };

export default connect((state) => {
    return state
})(MyInsurance);
