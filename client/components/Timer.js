import React from 'react';
import ReactDOM from 'react-dom';
import TimerDisplay from './TimerDisplay'; 
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date().toLocaleDateString};
    } componentDidMount(){
        setInterval(()=> this.setState({time: new Date().toLocaleDateString}),
    1000)
    }
    render() {
        return (<div>
            <TimerDisplay time={this.state.time}/>
        </div>)
    }
}
export default Timer