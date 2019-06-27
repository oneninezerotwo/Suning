import React from 'react';
import { connect } from 'dva';
// import axios from 'axios';
import { withRouter } from "react-router-dom";
// import styles from '../../routes/Insureance/Insurance';
class InsListProAll extends React.Component {
    state = {
        news: [],
        channelnum: this.props.home_store.channelnum,
        newsdata: [],
        axiosurl: ["https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/prolist#!method=get",
            "https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/health#!method=get",
            "https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/accident#!method=get",
            "https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/property#!method=get",
            "https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/Instreval#!method=gets"
        ]

    }
    render() {

        return (
            <section className="con-list _con-list_" style={{ marginBottom: "50px", marginTop: 129 }}>
                <div className="list _list_">
                    {
                        this.props.home_store.insData.map((item, index) => {
                            return (
                                <dl key={index} className={index < 3 ? "hot" : ""}>
                                    <a >
                                        <dt><img src={item.thum} alt="" /></dt>
                                        <dd>
                                            <p className="tit">
                                                <img src={item.choicenessMark} alt="" />
                                                <span>{item.rcmdTitle}</span>
                                            </p>
                                            <p className="con"><span className="tag">{item.keyword}</span></p>
                                            <p className="pri"><span style={{ fontSize: 18, color: '#ff6666' }}>{item.showPrice}</span>
                                            </p>
                                        </dd>
                                    </a>
                                </dl>
                            )
                        })
                    }

                </div>
                <div className="zero-box zero-box2 hidden">
                    <i />
                    <p>很遗憾，暂时没有找到您想要的产品！</p>
                </div>
            </section>


        )
    }
    UNSAFE_componentWillReceiveProps() {

        // console.log(this.props.home_store.insData);
        // console.log(this.props.home_store.channelnum);

    }
    // componentDidUpdate() {
    //     // this.setState({
    //     //     channelnum: this.props.home_store.channelnum
    //     // });
    //     // console.log(this.props.home_store.channelnum);
    //     (async () => {    // console.log(this.state.axiosurl[0]);
    //         let news;
    //         switch (this.props.home_store.channelnum) {
    //             case 0:
    //                 news = (await axios.get(this.state.axiosurl[0])).data.productList;
    //                 // localStorage.setItem("prolistAll", JSON.stringify(news));
    //                 break;
    //             case 1:
    //                 news = (await axios.get(this.state.axiosurl[1])).data.productList;
    //                 // localStorage.setItem("health", JSON.stringify(news));
    //                 break;
    //             case 2:
    //                 news = (await axios.get(this.state.axiosurl[2])).data.productList;
    //                 // localStorage.setItem("accident", JSON.stringify(news));
    //                 break;
    //             case 3:
    //                 news = (await axios.get(this.state.axiosurl[3])).data.productList;
    //                 // localStorage.setItem("property", JSON.stringify(news));
    //                 break;
    //             case 4:
    //                 news = (await axios.get(this.state.axiosurl[4])).data.productList;
    //                 // localStorage.setItem("treval", JSON.stringify(news));
    //                 break;
    //             default:
    //                 news = (await axios.get(this.state.axiosurl[0])).data.productList;
    //                 // localStorage.setItem("prolistAll", JSON.stringify(news));
    //                 break;
    //         }
    //         this.setState({
    //             news: news
    //         });
    //     })()
    // }
    async componentDidMount() {
        // console.log(this.props.home_store.channelnum);

        // 如果检测到localstorage有ne的键值则直接渲染localstorage 的值
        // if (localStorage.getItem("prolistAll" || "health")) {
        //     console.log(7377337);
        // const news2 = JSON.parse(localStorage.getItem("prolistAll"))

        // this.setState({
        //     news: [...this.state.news, ...news2]
        // })

        // }
        //没有检测到则请求数据
        // else {
        //请求全部数据
        let news;
        // console.log(this.state.axiosurl[0]);

        // console.log(news);
        //把请求过来的数据放在news里面，用以数据处理
        this.setState({
            news: news
        });
        //对数据进行切割，放进另外的数组，

        // const new3 = this.state.news.splice(0, 10);
        // this.setState({
        //     newsdata: [...this.state.newsdata, ...new3]
        // })
        // console.log(this.state.newsdata);
        // console.log(this.state.news);





        // }
        // window.addEventListener('scroll', this.hhhh);

        // window.onscroll = () => {
        //     console.log('8888');
        // }
    }

}

// IndexPage.propTypes = {
// };

export default withRouter(connect((state) => {
    return state;
})(InsListProAll));
