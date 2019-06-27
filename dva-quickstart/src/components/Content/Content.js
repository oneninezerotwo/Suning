import React from 'react';
import Personality from './Personality/Personality'
import Wealth from './Wealth/Wealth'

import { connect } from 'react-redux'
// import store from "../../store/store";

// let num = 1
class Content extends React.Component {

    render() {
        return (
            <div className="inm-gather-content">
                <div className="inm-gather-layout" style={{ left: '0%' }}>

                    {this.props.home_store.g_block ? <Personality /> : <Wealth />}



                </div>

            </div>
        )

    }
}

export default connect((state) => {
    return state
})(Content)