import React from 'react';
import { connect } from 'dva';
import axios from 'axios';

class Fundcomb2 extends React.Component {
    state = {
        List: [],
        tool: false,
        searchInputText: ''
    }
    changeTool() {
        this.setState({
            tool: !this.state.tool
        })
    }
    getInputValue(e) {
        console.log(e.target.value)
        let searchInputText = e.target.value
        this.setState({
            searchInputText
        })
    }
    filterFund(arr, searchInputText) {
        return arr.filter((item) => {
            console.log(arr)
            if (item.comName.indexOf(searchInputText) > -1) {
                return item
            }
        }).map((item, index) => {
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
    render() {

        return (

            <div>
                <div style={{
                    display: this.state.tool == true ? 'none' : 'block'
                }}>
                    <div className="title-img"><img src="https://lcres.suning.com/fsws/app/fund-static/images/title-img.png" alt /></div>
                    <div className="diagnosis-input" onClick={() => this.changeTool()}>
                        <div className="out-input"><i /><span>输入基金名称/基金代码</span></div>
                    </div>
                    <dl className="hot-list">
                        <dt>热门诊断</dt>
                        <dd>建信稳定添利C</dd>
                        <dd>大成添利宝货币A</dd>
                        <dd>中银金融地产混合</dd>
                        <dd>大成添利宝货币B</dd>
                        <dd>融通健康产业</dd>
                        <dd>工银目标收益一年C</dd>
                    </dl>
                </div>

                <div className="search-view" style={{
                    display: this.state.tool == true ? 'block' : 'none'
                }}>
                    <div className="search-input">
                        <div className="input-out">
                            <input ref="input" placeholder="输入基金名称/基金代码" value={this.state.searchInputText} onChange={
                                this.getInputValue.bind(this)
                            } type="search" />
                            <span style={{ display: 'none' }} /></div>
                        <span onClick={() => this.changeTool()}>取消</span>
                    </div>
                    <dl className="history-list" style={{ display: 'none' }} />
                    <div className="history-empty" style={{ display: 'none' }}>
                        <p className="empty-img" />
                        <p className="empty-txt">暂无符合要求的产品</p>
                    </div>
                </div>
                <ul className="nav-content" style={{
                    display: this.state.searchInputText == '' ? 'none' : 'block'
                }}>
                    {
                        this.filterFund(this.state.List, this.state.searchInputText)
                    }
                </ul>
            </div >

        )
    }
    componentDidMount() {
        this.created()
    }
    async created() {
        const data = await axios.get(
            "https://www.easy-mock.com/mock/5d141b14056c61592a0f9835/allcomb"
        );

        this.setState({
            List: data.data.lists,
        })
    }

}





export default connect((state) => {
    return state
})(Fundcomb2);