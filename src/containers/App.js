import React, { Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="mainContainer">
                {this.props.children}
            </div>
        );
    }
}
