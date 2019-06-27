import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'dva/router';

class FinancialNav extends React.Component {
    state = {
        listDatas: this.props.home_store.financialData.others.iconsList,
        routerName: ['/cash', '/fund', '/financialMost'] //跳转路由名字
    }
    turn_router(index) {
        if (index === 0) {
            this.props.history.push(this.state.routerName[0])
        } else if (index === 9) {
            this.props.history.push('/most')
            console.log(index)
        }
    }
    componentDidMount() {
        console.log(this.state.listDatas)
    }
    render() {
        return (
            <div className="floor-wrap">
                <div className="entrance-list product-list09">
                    {this.state.listDatas.map((item, index) => {
                        return (<a key={index} className="cell anchor-hook" onClick={this.turn_router.bind(this, index)}>
                            <div className="img-box">
                                <img src={item.imgUrl} alt="" />
                                {item.sign ? <p className="sign">{item.sign}</p> : ""}
                            </div>
                            <p className="name">{item.name}</p>
                        </a>
                        )
                    })}

                </div>
            </div>


        )

    }
}

export default withRouter(connect((state) => {
    return state
})(FinancialNav))