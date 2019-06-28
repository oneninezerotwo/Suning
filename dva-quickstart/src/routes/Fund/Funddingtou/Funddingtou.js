import React from 'react';
import { connect } from 'dva';

import './Funddingtou.css'

import Fheader from '../../../components/Fund/Funddingtou/Fheader';
import Funddingtou from '../../../components/Fund/Funddingtou/Funddingtou';



function Fundding() {

    return (
        <div>

            <Fheader />
            <Funddingtou />

        </div>
    );

}

export default connect()(Fundding);
