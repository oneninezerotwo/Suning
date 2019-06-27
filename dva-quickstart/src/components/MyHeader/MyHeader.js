import React from 'react'
import { connect } from 'react-redux'
import img1 from '../../assets/images/icon.png'

class MyHeader extends React.Component {

    render() {
        return (

            <div className="userInfo">
                <img src={img1} alt="头像" />
                <div className="account">
                    <p className="userName">VIP</p>
                    <p className="phone">{sessionStorage.getItem('userPhone').slice(0, 3)}******{sessionStorage.getItem('userPhone').slice(7, 10)}</p>
                </div>
            </div>


        )

    }
}

export default connect()(MyHeader)