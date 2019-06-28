import React from 'react';
import { connect } from 'dva';
import axios from 'axios';


class Fundcomb extends React.Component {

    state = {
        List: []
    }

    filterFund(arr, searchInputText) {
        return arr.filter((item) => {
            console.log(arr)
            if (item.extendTitle.indexOf(searchInputText) > -1) {
                return item
            }
        }).map((item, index) => {
            return (
                <li>
                    <div name="_1zuhe_index_recom_1" className="content anchor-hook">
                        <h2>{item.extendTitle}</h2>
                        <div className="libox">
                            <div>
                                <h3 className="orange"><em>+{item.quotaInfoList[0].convertQuotaVal}</em><span>%</span></h3>
                                <p><span>年化收益率</span><i className="icon" /></p>
                            </div>
                            <div>
                                <h3><em>{item.quotaInfoList[1].convertQuotaVal}</em><span /></h3>
                                <p><span>风险等级</span>
                                </p>
                            </div>
                            <div>
                                <h3><em>{item.quotaInfoList[2].convertQuotaVal}</em><span>元</span></h3>
                                <p><span>起投金额</span>
                                </p>
                            </div>
                        </div>
                        <div className="reason">精选理由</div>
                        <div className="detail">
                            {item.extendRemark}
                        </div>
                    </div>
                    <button name="_1zuhe_index_recomb_1" className="anchor-hook">{item.buttonName}</button>
                </li>
            )
        })
    }

    render() {

        return (

            <div>

                <div className="combinationarea">
                    <div className="swiper-container banner-box swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                        <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
                            <div className="swiper-slide swiper-slide-active" style={{ width: 351 }}><img src="http://image2.suning.cn/uimg/cms/img/155538213633204632.jpg" width="100%" alt="img" name="zuhe_index_banner_1" className="anchor-hook" />
                                {/**/}
                            </div>
                        </div>
                        {/**/}<span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                    </div>
                    <div className="report-box">
                        <div className="icon" />
                        <div className="info">享理财2号周度投资锦囊</div>
                        <div className="right"><i className="arrow-icon right" /></div>
                    </div>
                    <h1 className="title">精选策略</h1>
                    <ul className="productlist">
                        {
                            this.filterFund(this.state.List, this.props.fund.searchInputText)
                            // this.state.List.map((item, index) => {
                            //     return (
                            //         <li>
                            //             <div name="_1zuhe_index_recom_1" className="content anchor-hook">
                            //                 <h2>{item.extendTitle}</h2>
                            //                 <div className="libox">
                            //                     <div>
                            //                         <h3 className="orange"><em>+{item.quotaInfoList[0].convertQuotaVal}</em><span>%</span></h3>
                            //                         <p><span>年化收益率</span><i className="icon" /></p>
                            //                     </div>
                            //                     <div>
                            //                         <h3><em>{item.quotaInfoList[1].convertQuotaVal}</em><span /></h3>
                            //                         <p><span>风险等级</span>
                            //                         </p>
                            //                     </div>
                            //                     <div>
                            //                         <h3><em>{item.quotaInfoList[2].convertQuotaVal}</em><span>元</span></h3>
                            //                         <p><span>起投金额</span>
                            //                         </p>
                            //                     </div>
                            //                 </div>
                            //                 <div className="reason">精选理由</div>
                            //                 <div className="detail">
                            //                     {item.extendRemark}
                            //                 </div>
                            //             </div>
                            //             <button name="_1zuhe_index_recomb_1" className="anchor-hook">{item.buttonName}</button>
                            //         </li>
                            //     )
                            // })
                        }
                    </ul>
                </div>
            </div>

        )
    }

    componentDidMount() {
        this.created()
    }
    async created() {
        const data = await axios.get(
            "https://www.easy-mock.com/mock/5d141b14056c61592a0f9835/"
        );

        this.setState({
            List: data.data.productlist,
        })
        // console.log(this.state.List)
        // this.kingkongList = data.data.data.data.list.slice(0, 20);
    }

}





export default connect((state) => {
    return state
})(Fundcomb);