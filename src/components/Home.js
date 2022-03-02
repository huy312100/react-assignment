import React from "react";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            time: new Date().toLocaleTimeString(),
            clickedTime: 1
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000);
    }

    clickGame(){
        this.setState({
            clickedTime:this.state.clickedTime+1
        })
        if(this.state.clickedTime%3 === 0){
            alert("Fizz")
        }
        if(this.state.clickedTime%5 === 0){
            alert("Buzz")
        }
        if(this.state.clickedTime%15 === 0){
            alert("FizzBuzz")
        }
    }
    render() {
        return (
            <div>
                <h2>
                    Welcome to {this.props.bootcamp}. It is {this.state.time}
                </h2>

                <button onClick={() => this.clickGame()}> Clicky Game</button>
            </div>
        )
    }
}

export default Home;

