import React from 'react';
import { connect } from 'dva';
import '../../routes/Insureance/Insurance.css';
import '../../routes/Insureance/Swiper.css';
import InsIndexSearch from './InsIndexSearch';
import InsIndexBanner from './InsIndexBanner';
import InsIndexNav from './InsIndexNav';
import InsRecommend from './InsRecommend';
import Inshotsale from './Inshotsale';



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
class InsIndex extends React.Component {
    state = {

    }

    render() {
        return (
            // <div>is</div>
            <div>

                <InsIndexSearch />
                <InsIndexBanner />
                <InsIndexNav />
                <InsRecommend />
                <Inshotsale />

            </div>

        )
    }
}

// IndexPage.propTypes = {
// };

export default connect((state) => {
    return state
})(InsIndex);
