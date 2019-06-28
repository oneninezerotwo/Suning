import React from 'react';
import { connect } from 'dva';

import './Fundcomb.css'

import Fheader from '../../../components/Fund/Fundcomb/Fheader';
import Fundcomb2 from '../../../components/Fund/Fundcomb/Fundcomb2';
import Fundfooter from '../../../components/Fund/Fundcomb/Fundfooter';



function Fundcom() {

    return (
        <div>

            <Fheader />

            <Fundcomb2 />

            <Fundfooter />

        </div>
    );

}

export default connect()(Fundcom);
