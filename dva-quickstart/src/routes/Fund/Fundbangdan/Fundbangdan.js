import React from 'react';
import { connect } from 'dva';

import './Fundbangdan.css'

import Fheader from '../../../components/Fund/Fundbangdan/Fheader';
import Fundbangdan from '../../../components/Fund/Fundbangdan/Fundbangdan';


function Fundbangda() {

    return (
        <div>

            <Fheader />
            <Fundbangdan />

        </div>
    );

}

Fundbangda.propTypes = {
};

export default connect()(Fundbangda);
