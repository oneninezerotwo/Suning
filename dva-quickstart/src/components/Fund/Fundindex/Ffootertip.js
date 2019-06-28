import React from 'react';

import { connect } from 'dva';
import axios from 'axios';




class Ffootertip extends React.Component {
    state = {

    }

    render() {

        return (

            <div>

                <div className="footer-tip">
                    <p>基金销售服务由南京苏宁基金销售有限公司提供</p>
                    <p>基金有风险，投资需谨慎</p>
                </div>


            </div>

        )
    }


}


export default connect()(Ffootertip);