import React from 'react';
import { Router, Route, Link } from 'dva/router';
import { connect } from 'dva';
import axios from 'axios';


class Search extends React.Component {
    state = {
        navs: []
    }

    render() {

        return (
            <div>
                <div className="entrance-list product-list09">
                    {/* <a sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-icon&quot;,&quot;eleid&quot;:&quot;fund-icon&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-icon_1-1_undefined_undefined_undefined_fund-icon&quot;}" name="FUND_fund-icon_fund-icon_0" className="cell anchor-hook"><div className="img-box"><img src="https://image2.suning.cn/uimg/cms/img/155322438922041436.png" alt />
                        <p className="sign">火火火</p></div> <p className="name">优选股基</p>
                    </a> */}
                    {
                        this.state.navs.map((item, index) => {
                            return (
                                <Link to={{
                                    pathname: item.name,
                                    search: `?nav=${item.name}`
                                }} sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-icon&quot;,&quot;eleid&quot;:&quot;fund-icon&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-icon_1-1_undefined_undefined_undefined_fund-icon&quot;}" name="FUND_fund-icon_fund-icon_0" className="cell anchor-hook">
                                    <div className="img-box">
                                        <img src={item.imgUrl} alt />
                                        <p style={{
                                            display: item.sign == '' ? 'none' : 'block' && item.sign ? 'block' : 'none'
                                        }} className="sign">{item.sign == '' ? '' : item.sign}</p>
                                    </div>
                                    <p className="name">{item.name}</p>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
    componentDidMount() {
        // 页面第一次加载触发的
        const tab = this.state.tab
        // console.log(tab)
        // 如果缓存有的话，读缓存
        if (sessionStorage.getItem(tab)) {
            const navs = JSON.parse(sessionStorage.getItem(tab))
            this.setState({
                navs,
            })
        } else {
            // 否则发请求，并把数据加进缓存里面
            this.loadMore(tab);
        }
    }

    async loadMore(tab) {
        this.setState({
            loadingStatus: 'show'
        })
        const navs = (await axios.get('https://www.easy-mock.com/mock/5d00e7363b1e4c71fa612878/video/Fund', {
            // params: {
            //     page: this.state.page,
            //     limit: 10,
            //     tab
            // }
        })).data.mods[0].eles[0].data
        sessionStorage.setItem(tab, JSON.stringify([...this.state.navs, ...navs]))
        console.log(navs)

        this.setState({
            page: ++this.state.page,
            navs: [...this.state.navs, ...navs],
            loadingStatus: 'hide'
        })
    }

}





export default connect()(Search);