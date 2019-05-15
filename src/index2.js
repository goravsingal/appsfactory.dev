import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {latitude: null, error: ''};
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({latitude: position.coords.latitude}),
            (err) => this.setState({error: err.message})
        );        
    }
    render() {
        if (this.state.error && !this.state.latitude) {
            return (
                <div>Error: {this.state.error}</div>
            );
        }

        if (this.state.latitude) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.latitude} />
                </div>
            );
        }

        return (
            <div>Loading...</div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));