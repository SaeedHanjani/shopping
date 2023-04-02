import React, { Component } from 'React'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            Email: '',
            submitted: false,
        }
    }
    render() {
        return (
            <div className='form-container'>
                <form className='register-form' autoComplete='off'>
                    <input
                        id='first-name'
                        className=''
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                    />
                    <span id='first-name-error'>please enter a first name</span>
                    <input 
                    id='' 
                    className=''
                    type=''
                    placeholder=''
                    name=''
                     />
                </form>
            </div>
        )
    }

}