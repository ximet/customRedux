import React, { Component, PropTypes } from 'react';
import BaseService from '../services/BaseService';

let store = null;

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleAddNewEntry = this.handleAddNewEntry.bind(this);
    }

    componentWillMount () {
        store = BaseService.getStore();
        store.subscribe(this.render);
    }

    handleAddNewEntry () {
        store.dispatch(BaseService.addListItem({}));

        //todo after
    }

    render() {
        return (
            <div>
                <p>Main Page</p>
                <a onClick={this.handleAddNewEntry}> <p> Add new Medical Card </p></a>

            </div>
        );
    }
}

export default Home;
