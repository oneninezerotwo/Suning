import React from 'react';
import { connect } from 'dva';

import './Fundzhineng.css'

import Fheader from '../../../components/Fund/Fundzhineng/Fheader';
import Fundzhineng from '../../../components/Fund/Fundzhineng/Fundzhineng';




function Fundcom() {

    return (
        <div>

            <Fheader />

            <Fundzhineng />



        </div>
    );

}

export default connect()(Fundcom);
