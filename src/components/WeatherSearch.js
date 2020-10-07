import React from 'react';

class WeatherSearch extends React.Component {
    constructor(){
        super()
        //To create form:
        //1) Create states/variables based on the number of inputs that you have
        this.state={
            // temperature: '',
            cityName: '',
            // country: '',
            // humidity: '',
            // description: '',
            // error: ''
        }
    }

    render(){
        return (
            <div class="card my-5 py-5 px-5 text-center">
                <h1>Search City</h1>
                <div class="mb-3">
                    <label htmlFor="cityinput" class="form-label"/>
                    <input type="text" class="form-control" id="cityinput" placeholder="Search City" name="city" value={this.state.cityName} onChange={(e)=>this.setState({cityName:e.target.value})}/>
                </div>
                <button className="btn btn-primary" onClick={()=>this.props.handleSearch(this.state.cityName)}>Search</button>
            </div>
        );
    }
}

export default WeatherSearch;