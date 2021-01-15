import React, { Component } from 'react';
import FowardRefInput from './FowardRefInput';

class FowardRefParentInput extends Component {
    render() {
        return (
            <div>
                <FowardRefInput />
                <button>Focus Input</button>
            </div>
        );
    }
}

export default FowardRefParentInput;