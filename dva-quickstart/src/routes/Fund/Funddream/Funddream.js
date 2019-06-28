import React from 'react';
import { connect } from 'dva';

import './Funddream.css'

import Fheader from '../../../components/Fund/Funddream/Fheader';
import Funddream from '../../../components/Fund/Funddream/Funddream';



function Funddrea() {

    return (
        <div>

            <Fheader />
            <Funddream />

        </div>
    );

}

export default connect()(Funddrea);
