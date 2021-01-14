import React from 'react';

const withCounter = (WrappedComponent, increment) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(preveState => {
                return { count: preveState.count + increment }
            })
        }
        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props}
                />

            )
        }
    }
    return WithCounter;
}

export default withCounter;