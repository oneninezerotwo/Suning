import React from 'react'

import { connect } from 'react-redux'
// import Swiper from 'swiper/dist/js/swiper.js';
import { withRouter } from 'dva/router';

class FinancialHeader extends React.Component {
    componentDidMount() {

    }
    render() {
        return (

            <div className="f_header">
                <div className="head-placeholder" />
                <header className="header-fixed">
                    <section>
                        <div className="financial_goback2" onClick={() => {
                            this.props.history.go(-1)
                        }} style={{ zIndex: 111111 }}>
                            <p></p>
                        </div>
                        <div className="title" style={{ color: "black" }}>理财</div>
                        <div className="right-btn" onClick={() => {
                            if (sessionStorage.getItem("userPhone")) {
                                this.props.history.push("/financialMy")

                            } else {
                                this.props.history.push("/login")

                            }
                        }}>我的理财</div>
                    </section>

                    <div className="mask hide" />
                </header>

            </div>
        )

    }
}

export default withRouter(connect()(FinancialHeader))