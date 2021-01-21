import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './actions'
class App extends React.Component {
    render() {
        return (
            <div>

                {//-----------FIX Option 1 using Redux alone--------------------
                    /*<button onClick={() => fetchDog(this.props.dispatch)}>Show Dog</button> */}
                {/*-----------FIX Option 2 using Redux thunk-------------------- */}
                <button onClick={() => this.props.dispatch(fetchDog())}>Show Dog</button>
                {this.props.loading
                    ? <p>Loading...</p>
                    : this.props.error
                        ? <p>Error, try again</p>
                        : <p><img src={this.props.url} /></p>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(App);