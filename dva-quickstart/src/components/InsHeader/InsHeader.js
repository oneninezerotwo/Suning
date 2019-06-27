import React from 'react';
import { connect } from 'dva';
import { withRouter } from "react-router-dom";
// import styles from '../../routes/Insureance/Insurance';
class InsHeader extends React.Component {
    state = {
        title: ""
    }
    render() {
        return (
            <header className="header-fixed">
                <section>
                    <div className="goback" onClick={this.back.bind(this)}><i></i></div>
                    <div className="title" style={{ color: 'black' }}>{this.state.title}</div>
                    <div className="gomenu">
                        <div className="points-wrap" />
                    </div>
                </section>
            </header>

        )
    }
    back() {
        //回到上一页，withRouter
        this.props.history.go(-1)
    }
    componentDidMount() {
        //获取url的哈希值
        var urlhash = document.location.hash.split('#/')[1];
        // console.log(urlhash);
        //根据获取到的哈希值来设定头部的内容
        switch (urlhash) {
            case "Insurance":
                this.setState({
                    title: "苏宁金融"
                });
                break;
            case "InsuranceList":
                this.setState({
                    title: "产品列表"
                });
                break;
            case "InsuranceFind":
                this.setState({
                    title: "发现"
                });
                break;
            case "MyInsurance":
                this.setState({
                    title: "保险"
                });
                break;
            default:

        }
    }

}

// IndexPage.propTypes = {
// };

export default withRouter(connect((state) => {
    return state;
})(InsHeader));
