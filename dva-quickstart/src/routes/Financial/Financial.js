import React from 'react';
import './financial.css';

import { connect } from 'react-redux';
import FinancialHeader from '../../components/FinancialHeader/FinancialHeader';
import FinancialNotice from '../../components/FinancialNotice/FinancialNotice';
import FinancialNav from '../../components/FinancialNav/FinancialNav';
import FinancialRecommended from '../../components/FinancialRecommended/FinancialRecommended';
import FinancialContent from '../../components/FinancialContent/FinancialContent';
import FinancialContentTwo from '../../components/FinancialContent/FinancialContentTwo';
import ajax from '../../utils/request';
import Loing from "../../components/Loing/Loing"


class Financial extends React.Component {
    render() {

        return (
            <div>
                <Loing />
                <FinancialHeader />


                <div className="tab-content-wrap" ref="wrap">

                    <div>
                        <div style={{ width: 375 }}>

                            <div style={{ position: 'relative', zIndex: 100 }}>
                                <div className="page-wrap">
                                    {
                                        this.props.home_store.financialIsok ?
                                            <div>
                                                <FinancialNotice />
                                                <FinancialNav />
                                                <FinancialRecommended />
                                                <FinancialContent />
                                                <FinancialContentTwo />
                                            </div>
                                            : ""
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div >

        )

    }
    async  componentDidMount() {
        // document.body.style.overflowY = 'scroll'
        this.props.dispatch({
            type: 'home_store/loingShow',
            loing_isok: true
        })
        var { data } = await ajax("https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/content1#!method=get")
        this.props.dispatch({
            type: "home_store/financial",
            financialData: data,
            financialIsok: true
        })
        this.props.dispatch({
            type: 'home_store/loingShow',
            loing_isok: false
        })
    }

}

export default connect((state) => {
    return state
})(Financial)