import React from 'react';
import { connect } from 'dva';


import Fundzhaiquan from '../../../components/Fund/Fundzhaiquan/Fundzhaiquan';


function Fundzhai() {

    return (
        <div>

            <Fundzhaiquan />

        </div>
    );

}

Fundzhai.propTypes = {
};

export default connect()(Fundzhai);
