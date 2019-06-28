import React from 'react';
import { connect } from 'dva';
import { Router, Route, Link } from 'dva/router';


class Fundfooter extends React.Component {


    state = {
        menuNum: 1
    }

    setMenuNum = (num) => {
        this.props.fund.footerMenu = num

    }

    render() {

        return (

            <div>
                <div className="bottom-blank" />
                <ul className="bottom-nav-list">
                    <Link to={{
                        pathname: '/组合专区'
                    }} name="zuhe_index_navi_1" className={this.props.fund.footerMenu === 1 ? "on anchor-hook " : "anchor-hook"}
                        onClick={() => this.setMenuNum(1)}><i className="icon1" />
                        <p>精选组合</p>
                    </Link>
                    <Link to={{
                        pathname: '/组合专区/全部组合'
                    }} name="zuhe_index_navi_2" className={this.props.fund.footerMenu === 2 ? "on anchor-hook " : "anchor-hook"}
                        onClick={() => this.setMenuNum(2)}><i className="icon2" />
                        <p>全部组合</p>
                    </Link>
                    <Link to={{
                        pathname: '/组合专区'
                    }} name="zuhe_index_navi_3" className={this.props.fund.footerMenu === 3 ? "on anchor-hook " : "anchor-hook"}
                        onClick={() => this.setMenuNum(3)}><i className="icon3" />
                        <p>我的组合</p>
                    </Link>
                </ul>
            </div>

        )
    }
    componentDidMount() {
        // console.log(document.location)
    }
}





export default connect((state) => {
    return state
})(Fundfooter);