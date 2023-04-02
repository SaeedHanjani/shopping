import React, { Component } from "react";
import './Counter.css'

export default class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            temp: 10,
            tempClass:'cold'
        }
        this.addToCounter = this.addToCounter.bind(this)
        this.minesFromCounter = this.minesFromCounter.bind(this)
    }

    addToCounter() {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 }
        })
    }

    minesFromCounter() {
        this.setState(prevState => {
            return { counter: prevState.counter - 1 }
        })
    }

    render() {
        return (
            <section>
                <div>
                    <h2>Counter</h2>
                    <h3>{this.state.counter}</h3>
                    <div>
                        <button onClick={this.addToCounter}>Add count</button>
                        <button onClick={this.minesFromCounter}>Lower Count</button>
                    </div>
                </div>
            </section>
        )
    }
}