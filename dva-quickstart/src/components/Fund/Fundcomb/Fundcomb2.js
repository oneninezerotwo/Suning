import React from 'react';
import { connect } from 'dva';
import axios from 'axios';

class Fundcomb2 extends React.Component {

    state = {
        allList: [],
        num: 0,
        menuNum: 1
    }
    setMenuNum = (num) => {

        this.setState({

            menuNum: num

        });
    }
    render() {

        return (

            <div>
                <ul className="nav-rank fix-header">
                    <li name="zuhe_list_ measure_01" className={this.state.menuNum === 1 ? "anchor-hook on " : "anchor-hook"}
                        onClick={() => this.setMenuNum(1)}>累计收益率</li>
                    <li name="zuhe_list_ measure_02" className={this.state.menuNum === 2 ? "anchor-hook on " : "anchor-hook"}
                        onClick={() => this.setMenuNum(2)}>起投金额</li>
                    <li name="zuhe_list_ measure_03" className={this.state.menuNum === 3 ? "anchor-hook on " : "anchor-hook"}
                        onClick={() => this.setMenuNum(3)}>风险等级</li>
                </ul>

                <div className="nav-placeholder" />

                <div className="nav-wrapper">
                    <ul className="nav-content">
                        {
                            this.state.allList.map((item, index) => {
                                return (
                                    <li name="zuhe_list_item_01" className="anchor-hook">
                                        <div className="title">
                                            <span className="name">{item.comName}</span>
                                            <span className="icon-mark" style={{
                                                display: item.lable1 == '' ? 'none' : ''
                                            }}>{item.lable1}</span>
                                            <span className="icon-mark" style={{
                                                display: item.lable2 == '' ? 'none' : ''
                                            }}>{item.lable2}</span>
                                        </div>
                                        <div className="info">
                                            <div>
                                                <p className="profit positive">
                                                    <span className="num">+{item.quotaList[0].convertQuotaVal}</span>
                                                    <span className="unit">%</span>
                                                </p>
                                                <p className="sec">累计收益率</p>
                                            </div>
                                            <div>
                                                <p className="value">{item.quotaList[1].quotaVal}元</p>
                                                <p className="sec">起投金额</p>
                                            </div>
                                            <div>
                                                <p className="value">{item.quotaList[2].convertQuotaVal}</p>
                                                <p className="sec">风险等级</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="bottom-tip">基金销售服务由南京苏宁基金销售有限公司提供<br />基金有风险，投资需谨慎</div>
            </div>

        )
    }
    componentDidMount() {
        this.created();
        window.addEventListener('scroll', this.handleScroll);
    }
    async created() {
        const data = await axios.get(
            "https://www.easy-mock.com/mock/5d141b14056c61592a0f9835/allcomb"
        );
        // console.log(data)
        this.setState({
            allList: [...this.state.allList, ...data.data.lists]
        })
    }
    handleScroll = (event) => {
        //滚动条高度
        let ctx = this;
        let clientHeight = document.documentElement.clientHeight; //可视区域高度
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
        console.log(scrollTop)


        if (scrollHeight < (clientHeight + scrollTop + 30)) {
            // 加载更多操作
            // console.log("123");
            if (this.state.num < 1) {
                this.created();
                this.setState({
                    num: this.state.num * 1 + 1
                })
            }


        }
    }
}





export default connect()(Fundcomb2);