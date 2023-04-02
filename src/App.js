import React, { Component } from 'react'
import Shop from './Shop/Shop'
import TodoList from './TodoList/TodoList'

export default class App extends Component {

    render() {
        return (
            <div>
                <TodoList />
            </div>
        )
    }
}