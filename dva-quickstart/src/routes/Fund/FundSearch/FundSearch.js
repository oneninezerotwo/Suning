import React from 'react';
import { connect } from 'dva';

import Fheader from '../../../components/Fund/FundSearch/Fheader';
import FundSearch from '../../../components/Fund/FundSearch/Fundzhineng';


function FundSearc() {

    return (
        <div>

            <Fheader />
            <FundSearch />

        </div>
    );

}

FundSearc.propTypes = {
};

export default connect()(FundSearc);
