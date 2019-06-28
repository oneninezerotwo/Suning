import React from 'react';
import { connect } from 'dva';

import './Fundgold.css'
import Fheader from '../../../components/Fund/Fundgold/Fheader';
import Fundgold from '../../../components/Fund/Fundgold/Fundgold';


function Fundgol() {

    return (
        <div>

            <Fheader />
            <Fundgold />

        </div>
    );

}


export default connect()(Fundgol);
