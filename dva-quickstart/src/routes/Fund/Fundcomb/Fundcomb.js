import React from 'react';
import { connect } from 'dva';

import './Fundcomb.css'

import Fheader from '../../../components/Fund/Fundcomb/Fheader';
import Fundcomb from '../../../components/Fund/Fundcomb/Fundcomb';
import Fundfooter from '../../../components/Fund/Fundcomb/Fundfooter';



function Fundcom() {

    return (
        <div>

            <Fheader />

            <Fundcomb />

            <Fundfooter />

        </div>
    );

}

export default connect()(Fundcom);
