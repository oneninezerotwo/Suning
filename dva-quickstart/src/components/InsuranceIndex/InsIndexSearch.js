import React from 'react';
import { connect } from 'dva';
class InsHeader extends React.Component {
    render() {
        return (
            <div className="search-wrapper fixed-search">
                <div className="search" data-href="/hotWord.htm">
                    <i></i>
                    <span>恶性肿瘤医疗</span></div>
            </div>


        )
    }

}

// IndexPage.propTypes = {
// };

export default connect()(InsHeader);
