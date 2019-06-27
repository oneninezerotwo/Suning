import React from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/f-1.png';
import img2 from '../../assets/images/f-2.png';
import img3 from '../../assets/images/f-3.png';
import img4 from '../../assets/images/f-4.png';
import img5 from '../../assets/images/f-1-on.png';
import img6 from '../../assets/images/f-2-on.png';
import img7 from '../../assets/images/f-3-on.png';
import img8 from '../../assets/images/f-4-on.png';
// import styles from '../../routes/Insureance/Insurance';
class InsFoot extends React.Component {
    state = {
        // headname: this.props.home_store.headname,
        title: this.props.home_store.InsHeadTitle,
        isturnbool: 0,
        turnlist: [
            {
                id: "issm-prod-tab-home",
                turnurl: "Insurance",
                imgurl: img1,
                imgurlon: img5,
                listname: "首页"
            },
            {
                id: "issm-prod-tab-prod",
                turnurl: "InsuranceList",
                imgurl: img2,
                imgurlon: img6,
                listname: "产品"
            },
            {
                id: "issm-prod-tab-prod",
                turnurl: "InsuranceFind",
                imgurl: img3,
                imgurlon: img7,
                listname: "发现"
            },
            {
                id: "issm-prod-tab-my",
                turnurl: "MyInsurance",
                imgurl: img4,
                imgurlon: img8,
                listname: "我的"
            }
        ]
    }
    render() {
        return (
            <section className="fix-foot" style={{ height: '50px' }}>
                <ul ref="imgname">
                    {
                        this.state.turnlist.map((item, index) => {
                            return (
                                // console.log(item.imgurl);
                                <li key={index} onClick={
                                    this.highlight.bind(this, index)
                                }>
                                    {/* <a id={item.id}> */}

                                    <Link to={
                                        { pathname: item.turnurl }
                                    } id={item.id}>
                                        <img name={item.listname} src={(this.state.isturnbool === index) ? item.imgurlon : item.imgurl} alt="" />
                                        <p>{item.listname}</p>
                                    </Link>

                                    {/* </a> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </section>

        )
    }
    // this.props.home_store.foot_num
    highlight(index2) {
        // console.log(index2);
        this.setState({
            isturnbool: index2
        })

        // this.props.dispatch({
        //     type: "home_store/save_foot",
        //     foot_num: index2
        // })
        // ii.imgurl = ii.imgurlon;
    }
    async componentDidMount() {
        var bkl = document.location.hash.split('#/')[1];
        switch (bkl) {
            case "Insurance":
                this.setState({
                    isturnbool: 0
                });
                break;
            case "InsuranceList":
                this.setState({
                    isturnbool: 1
                });
                break;
            case "InsuranceFind":
                this.setState({
                    isturnbool: 2
                });
                break;

            case "MyInsurance":
                this.setState({
                    isturnbool: 3
                });
                break;
            default:

        }
        // console.log(bkl);


        // console.log(this.refs.imgname);
        this.refs.imgname.onclick = e => {
            // console.log(e.target.innerText);
            switch (e.target.innerText) {
                case "首页":

                    this.props.dispatch({
                        type: "home_store/InsHeadTitle",
                        InsHeadTitle: "苏宁金融"
                    })

                    break;
                case "产品":
                    this.props.dispatch({
                        type: "home_store/InsHeadTitle",
                        InsHeadTitle: "产品列表"
                    })
                    break;
                case "发现":
                    this.props.dispatch({
                        type: "home_store/InsHeadTitle",
                        InsHeadTitle: "发现"
                    })
                    break;
                default:
                    this.props.dispatch({
                        type: "home_store/InsHeadTitle",
                        InsHeadTitle: "苏宁金融"
                    })
                    break;
            }
            // console.log(this.state);
        }

    }
}

// IndexPage.propTypes = {
// };

export default connect((state) => {
    return state
})(InsFoot);
