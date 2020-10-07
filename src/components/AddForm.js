import React from 'react';

class AddForm extends React.Component {
    constructor(){
        super()
        //To create form:
        //1) Create states/variables based on the number of inputs that you have
        this.state={
            name: '',
            assignee: '',
            difficulty: ''
        }
    }

    render(){
        return (
            <div class="card my-5 py-5 px-5 text-center">
                <h1>Add New WOD</h1>
                <div class="mb-3">
                    <label htmlFor="exercisenameinput" class="form-label"/>
                    <input type="text" class="form-control" id="exercisenameinput" placeholder="Exercise Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <label htmlFor="assigneeinput" class="form-label"/>
                    <input type="text" class="form-control" id="assigneeinput" placeholder="Assignee" name="assignee" value={this.state.assignee} onChange={this.handleChange}/>
                    <label htmlFor="difficultyinput" class="form-label"/>
                    <input type="text" class="form-control" id="difficultyinput" placeholder="Difficulty" name="difficulty" value={this.state.difficulty} onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary" OnClick={this.handleClick}>Add</button>
            </div>
        );
    }

    //Create a method handleChange
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]:value
        })
    }

    handleClick = () => {
        // Lifting up state - 3) In child, call the props
        // Lifting up state - 4) Pass the items to be sent to parent in arguments
        this.props.handleAdd(this.state.name, this.state.assignee, this.state.difficulty)
    }
    
}

export default AddForm;