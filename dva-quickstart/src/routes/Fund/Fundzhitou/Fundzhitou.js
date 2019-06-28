import React from 'react';
import { connect } from 'dva';


import Fundzhitou from '../../../components/Fund/Fundzhitou/Fundzhitou';



function Funddrea() {

    return (
        <div>

            <Fundzhitou />

        </div>
    );

}

export default connect()(Funddrea);
