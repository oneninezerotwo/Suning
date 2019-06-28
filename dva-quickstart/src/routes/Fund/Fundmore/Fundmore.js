import React from 'react';
import { connect } from 'dva';

import './Fundmore.css';
import Fheader from '../../../components/Fund/Fundmore/Fheader';
import Fundfloor from '../../../components/Fund/Fundmore/Fundfloor';


function Fundmore() {

    return (
        <div>

            <Fheader />
            <Fundfloor />

        </div>
    );

}

Fundmore.propTypes = {
};

export default connect()(Fundmore);
