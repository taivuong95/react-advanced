import React from 'react';

class RegComp extends React.Component {
    render() {
        console.log('Regular Component ');

        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp