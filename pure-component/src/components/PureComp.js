import React from 'react';

class PureComp extends React.PureComponent {
    constructor(props) {
        super(props);

    }
    render() {
        console.log('Pure Component ');

        return (
            <div>
                Pure Component {this.props.name}
            </div>
        );
    }
}



export default PureComp;