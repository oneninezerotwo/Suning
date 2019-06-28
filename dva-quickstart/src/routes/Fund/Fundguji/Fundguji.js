import React from 'react';
import { connect } from 'dva';


import Fundguji from '../../../components/Fund/Fundguji/Fundguji';


function Fundji() {

    return (
        <div>

            <Fundguji />

        </div>
    );

}

Fundji.propTypes = {
};

export default connect()(Fundji);
