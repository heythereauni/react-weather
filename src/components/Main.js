
import React from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherTable from './WeatherTable';
import WeatherDetail from './WeatherDetail';

class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            weathers:[],
            selectedWeather:null
        }
    }

    render(){
        return(
            <div className='container py-3 card my-3'>
                 {/* Lifting up state - 2) Pass the function as attribute to child */}
                <WeatherSearch handleSearch={this.handleSearch} />
                <WeatherTable weathers={this.state.weathers} handleWeatherSelect={this.handleWeatherSelect}/>
                {
                    this.state.selectedWeather ? <WeatherDetail selectedWeather={this.state.selectedWeather}/> : <div/>
                }
            </div>
        )
    }

    //Lifting up state - 1) In parent, create the function that is going to be called from child
    // addWod = (name, assignee, difficulty) => {
       
    //    let newWod = {  
    //     name:name,
    //     assignee:assignee,
    //     difficulty:difficulty
    //    }

    //    this.setState({
    //     weather: [...this.state.weather, newWod]
    //    })
      
    // }

    // handleRowClick = (name) => {
    //     console.log('click')
    //   let selectedWeather = this.state.weather.filter(
    //         val => {
    //             return val.name == name
    //         }
    //     )[0]
    //     this.setState({
    //         selectedWeather:selectedWeather
    //     })
    //     console.log(this.state.selectedWeather)
    // }

    handleSearch = (city) => {
            this.fetchAPI(city)
        }

    handleWeatherSelect = (dt) => {
        this.weathers.filter(val =>{
            return val.dt === dt
        })
        this.setState({
            selectedWeather:this.state.selectedWeather
        })
    }

    componentDidMount(){
        //this.fetchAPI()
    }

    fetchAPI(city){
        fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=9a875f3b663d836442770050455b2fbf`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weathers:data["list"]
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default Main;