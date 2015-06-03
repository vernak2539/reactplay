'use strict';

import { Dispatcher } from 'flux';
import React, { Component as ReactComponent } from 'react';
import MicroEvent from 'microevent-github';

var AppDispatcher = new Dispatcher();

class ListStoreClass {
    constructor() {
        this.items = [];
    }
    getAll() {
        return this.items;
    }
}

var ListStore = new ListStoreClass();

MicroEvent.mixin(ListStore);

AppDispatcher.register(payload => {
    switch(payload.eventName) {
        case 'new-item':
            ListStore.items.push(payload.newItem);
            ListStore.trigger('change');
            break;
    }
    return true;
});

class TestBtn extends ReactComponent {
    render() {
        return (
            <button onClick={ this.createNewItem }>Testing</button>
        );
    }
    createNewItem(event) {
        AppDispatcher.dispatch({
            eventName: 'new-item'
            , newItem: {
                name: 'Macro'
            }
        });
    }
}

class TestList extends ReactComponent {
    render() {
        var items = ListStore.getAll();
        var markup = items.map(function(item) {
            return (
                <li key={item.key}>
                    {item.name}
                </li>
            );
        });

        return (
            <ul>{markup}</ul>
        );
    }
    componentDidMount() {
        ListStore.bind('change', this.listChanged.bind(this));
    }
    componentWillUnmount() {
        ListStore.unbind('change', this.listChanged.bind(this));
    }
    listChanged() {
        this.forceUpdate();
    }
}


React.render(<TestBtn />, document.querySelector('#btn'));
React.render(<TestList />, document.querySelector('#list'));
