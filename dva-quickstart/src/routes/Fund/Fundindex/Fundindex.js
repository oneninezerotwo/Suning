import React from 'react';
import { connect } from 'dva';
import './Fund.css';
import Fheader from '../../../components/Fund/Fundindex/Fheader';
import Fserach from '../../../components/Fund/Fundindex/Fserach';
import Fnav from '../../../components/Fund/Fundindex/Fnav';
import FHotspot from '../../../components/Fund/Fundindex/FHotspot';
import FHotfund from '../../../components/Fund/Fundindex/FHotfund';
import FHotfund2 from '../../../components/Fund/Fundindex/FHotfund2';
import Fbanner from '../../../components/Fund/Fundindex/Fbanner';
import Ffundship from '../../../components/Fund/Fundindex/Ffundship';
import Ffundniu from '../../../components/Fund/Fundindex/Ffundniu';
import Ffundzhishu from '../../../components/Fund/Fundindex/Ffundzhishu';
import Ffundbangdan from '../../../components/Fund/Fundindex/Ffundbangdan';
import Ffundcaifu from '../../../components/Fund/Fundindex/Ffundcaifu';
import Ffootertip from '../../../components/Fund/Fundindex/Ffootertip';
import Ffootertab from '../../../components/Fund/Fundindex/Ffootertab';
import Fpop from '../../../components/Fund/Fundindex/Fpop';
import Ficon from '../../../components/Fund/Fundindex/Ficon';


function Fundindex() {

    return (
        <div>
            <Fheader />
            <Fserach />
            <Fnav />
            <FHotspot />
            <FHotfund />
            <FHotfund2 />
            <Fbanner />
            <Ffundship />
            <Ffundniu />
            <Ffundzhishu />
            <Ffundbangdan />
            <Ffundcaifu />
            <Ffootertip />
            <Ffootertab />
            <Ficon />
            <Fpop />

        </div>
    );

}

Fundindex.propTypes = {
};

export default connect()(Fundindex);
