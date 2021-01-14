import React from 'react';
import UpdatedComponent from './withCounter';
class HoverCounter extends React.Component {

    render() {
        const { count, incrementCount } = this.props;
        return (
            <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
        )
    }
}

export default UpdatedComponent(HoverCounter, 7);