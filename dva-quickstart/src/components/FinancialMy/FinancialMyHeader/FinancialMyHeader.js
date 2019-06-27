import React from 'react'
// import 'swiper/dist/css/swiper.min.css';

import { connect } from 'react-redux'
import { withRouter } from 'dva/router';
// import ajax from '../../utils/request';


class FinancialMyHeader extends React.Component {
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
            <div className="f_header">
                <div className="head-placeholder" />
                <header className="header-fixed">
                    <section>
                        <div className="financial_goback" onClick={() => {
                            this.props.history.go(-1)
                        }}
                            style={{ zIndex: 111111 }}>
                            <p></p>
                        </div>
                        <div className="title" style={{ color: "black" }}>我的理财</div>
                        <div className="right-btn" onClick={() => {
                            if (sessionStorage.getItem("userPhone")) {
                                console.log(1)
                            } else {
                                this.props.history.push("/login")

                            }
                        }}>理财账单</div>
                    </section>
                </header>

            </div>
        )

    }
}

export default withRouter(connect()(FinancialMyHeader))