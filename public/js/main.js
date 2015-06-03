'use strict';

import { Dispatcher } from 'flux';
import React from 'react';

var AppDispatcher = new Dispatcher();

var TestBtn = React.createClass({
    render: function() {
        return (
            <button onClick={ this.createNewItem }>Testing</button>
        )
    }
    , createNewItem: function(event) {
        AppDispatcher.dispatch({
            eventName: 'new-item'
            , newItem: {
                name: 'Macro'
            }
        });
    }
});

React.render(<TestBtn />, document.querySelector('#test'));
