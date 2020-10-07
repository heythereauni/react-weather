import React from 'react';

//Example using Class Component
//Class component normally will extend React.Component
//It will have a render function where the UI will be returned there
class Counter extends React.Component{

    constructor(){
        super()
        this.state = {
            score : 0
        }
        // Binding decrease button with this (2nd way)
        this.decreaseButton = this.decreaseButton.bind(this);
    }
    
    //Where design our UI
    render(){
        return(
        <div>
            <p>
                {/* Bring out the state */}
                {this.state.score}
            </p>
            {/* Button click on react, we have to pass this through bind */}
            <button className="btn btn-primary" onClick={this.increaseButton.bind(this)}>
                Increment
            </button>
            <button className="btn btn-dark" onClick={this.decreaseButton}>
                Decrease
            </button>
            <button className="btn btn-danger" onClick={() => this.resetButton}>
                Reset
            </button>
        </div>
        )
    }

    
    resetButton = () => {
        // Change the value of score through setState
        this.setState(
            {
                score: 0
            }
        )
    }

    increaseButton(){
        // Change the value of score through setState
        this.setState(
            {
                score:this.state.score+1
            }
        )
    }

    decreaseButton(){
        // Change the value of score through setState
        this.setState(
            {
                score:this.state.score-1
            }
        )
    }
}

export default Counter;