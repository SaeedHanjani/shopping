import React, { Component } from 'react'
import User from './User'

export default class App extends Component {

    constructor() {
        super()

        this.state = {
            users:
                [
                    { id: 1, name: 'Saeed' },
                    { id: 2, name: 'Mamad' },
                    { id: 3, name: 'Vahid' },
                    { id: 4, name: 'Hamid' },
                ]
        }
        this.userRemoveHandler = this.userRemoveHandler.bind(this)
    }

    userRemoveHandler(userId) {

        let newUsers = [...this.state.users]
        let mainUserIndex = newUsers.findIndex(user => {
            return user.id === userId
        })

        newUsers.splice(mainUserIndex, 1)
        this.setState({
            users: newUsers
        })
        console.log(newUsers);
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => (
                        <User key={user.id} {...user} onRemove={this.userRemoveHandler} />
                    ))
                }
            </div>
        )
    }
}