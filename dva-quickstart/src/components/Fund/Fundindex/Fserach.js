import React from 'react';
import { connect } from 'dva';
import { Router, Route, Link } from 'dva/router';


class Search extends React.Component {
    state = {

    }

    render() {

        return (
            <div>

                <div className="fund-search-box">
                    <Link to="/FundSearch" className="search-box">
                        <i className="icon-search" />
                        <p className="placeholder">搜索基金名称、基金代码</p>
                    </Link>
                </div>

            </div>
        )
    }
    componentDidMount() {

    }

}


export default connect()(Search);