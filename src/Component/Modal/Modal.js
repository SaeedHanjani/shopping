import React, { Component } from 'react'
import './Modal.css'
import propTypes from 'prop-types'

export default class Modal extends Component {

    render() {
        return (
            <div>
                <div className='cd-popup is-visible' role='alert'>
                    <div className='cd-popup-container'>
                        <p>{this.props.state}</p>
                        <ul className='cd-buttons'>
                            <li><a href='#0'>تایید</a></li>
                            <li><a href='#0'>بازگشت</a></li>
                        </ul>
                        <a href='#0' className='cd-popup-close img-replace'>Close</a>
                    </div>
                </div>
            </div>
        )
    }
}
Modal.defaultProps = {
    message: 'شما با موفقیت وارد پنل کاربری شدید'
}

Modal.propTypes = {
    state: propTypes.oneOf(['hii','hello']).isRequired
}