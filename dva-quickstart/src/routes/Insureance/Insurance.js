import React from 'react';
import { connect } from 'dva';
import './Insurance.css';
import './Swiper.css';
import './header.css';
import './InsFoot.css';
import InsHeader from '../../components/InsHeader/InsHeader';
import InsIndexSearch from '../../components/InsuranceIndex/InsIndexSearch';
import InsIndexBanner from '../../components/InsuranceIndex/InsIndexBanner';
import InsFoot from '../../components/InsFoot/InsFoot';
import InsIndexNav from '../../components/InsuranceIndex/InsIndexNav';
import InsRecommend from '../../components/InsuranceIndex/InsRecommend';
import Inshotsale from '../../components/InsuranceIndex/Inshotsale';




// function IndexPage() {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//         <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }
class Insurance extends React.Component {
    state = {

    }

    render() {
        return (
            // <div>is</div>
            <div>
                <InsHeader />
                <InsIndexSearch />
                <InsIndexBanner />
                <InsIndexNav />
                <InsRecommend />
                <InsFoot />
                <Inshotsale />
            </div>

        )
    }
}

// IndexPage.propTypes = {
// };

export default connect((state) => {
    return state
})(Insurance);
