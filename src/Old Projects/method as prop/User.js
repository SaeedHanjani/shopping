import React from "react";
// import * as ReactDOMClient from 'react-dom/client';
// ReactDOMClient.createRoot(/*...*/);
// ReactDOMClient.hydrateRoot(/*...*/);

export default class User extends React.Component {

    removeMethod(id) {
        this.props.onRemove(id)
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}
                    <button
                        onClick={this.removeMethod.bind(this, this.props.id)}>
                        Remove
                    </button>
                </h1>
            </div>
        )
    }
}