import React from 'react';
import { connect } from 'dva';
// import styles from '../../routes/Insureance/Insurance';
const imgstyle = {
    display: 'inline-block'
}
class InsIndexNav extends React.Component {

    render() {
        return (
            <section className="navigation">
                <ul>
                    <li>
                        <a href="https://nhb.suning.com/" name="issm-none-type-1">
                            <img className="icon-active" src="https://image.suning.cn/uimg/eppagtms/eppagtms/155736482665387633.png?width=200&height=100" alt="" />
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/155728017260679768.png?width=50&height=51" style={imgstyle} alt="" />
                            <p>宁互宝</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://qss.suning.com/ba9a1.htm" name="issm-none-type-2">
                            <img className="icon-active" src="https://image.suning.cn/uimg/eppagtms/eppagtms/156030645105813561.png?width=64&height=36" alt="" />
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/156030644236228230.png?width=50&height=50" style={imgstyle} alt="" />
                            <p>有奖问卷</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://issm.suning.com/insList.htm?columnCode=C1036&cateCode=R8004003" name="issm-none-type-3">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153369532674131527.jpg?width=50&height=50" style={imgstyle} alt="" />
                            <p>意外险</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://issm.suning.com/insList.htm?columnCode=C1037&cateCode=R8004005" name="issm-none-type-4">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/155378402558513558.png?width=50&height=50" style={imgstyle} alt="" />
                            <p>健康险</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://issm.suning.com/insList.htm?columnCode=C1038&cateCode=R8004002" name="issm-none-type-5">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153369518308683526.jpg?width=50&height=50" style={imgstyle} alt="" />
                            <p>财产险</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://jinrong.suning.com/wapbxfuli1.html" name="issm-none-type-6">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/155736499556783574.png?width=50&height=50" style={imgstyle} alt="" />
                            <p>保障福利</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://issm.suning.com/secret/memberBirthday.htm" name="issm-none-type-7">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/154717175774408888.png?width=50&height=50" style={imgstyle} alt="" />
                            <p>生日特权</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://issm.suning.com/secret/addCarReservationsPage.htm" name="issm-none-type-8">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/154907010980548104.png?width=50&height=50" style={imgstyle} alt="" />
                            <p>车险预约</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://issm.suning.com/insList.htm" name="issm-none-type-9">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153369547148452762.jpg?width=50&height=50" style={imgstyle} alt="" />
                            <p>全部</p>
                        </a>
                    </li>
                </ul>
            </section>


        )
    }

}

// IndexPage.propTypes = {
// };

export default connect()(InsIndexNav);
