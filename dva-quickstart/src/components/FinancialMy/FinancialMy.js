import React from 'react'
import '../FinancialMost/financialMost.css'
import { connect } from 'react-redux'
import { withRouter } from 'dva/router';
import FinancialMyHeader from './FinancialMyHeader/FinancialMyHeader'
import FinancialMyContent2 from './FinancialMyContent2/FinancialMyContent2'
import FinancialMyContent1 from './FinancialMyContent1/FinancialMyContent1'
import Loing from "../../components/Loing/Loing"


class FinancialMy extends React.Component {
    state = {
        listData: [],
        listData2: [],
        right_nav_isok: false
    }
    go_back() {
        this.props.history.go(-1)
    }

    render() {
        return (
            <div>
                <FinancialMyHeader />
                <FinancialMyContent1 />
                <FinancialMyContent2 />
                <Loing />
            </div>
        )

    }
}

export default withRouter(connect()(FinancialMy))