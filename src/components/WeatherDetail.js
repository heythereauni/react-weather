import React from 'react';
//Stateless or Functional Component
function WeatherDetail({selectedWeather}){
    return (
        <div class="card my-5 py-5 px-5 text-center">
            <img src={`https://openweathermap.org/img/wn/${selectedWeather.weather[0].icon}@2x.png`}/>
            <p>{selectedWeather.temp.day - 273} &deg; C</p>
            <p>{(new Date(selectedWeather.dt*1000)).toDateString()}</p>
            <p>{selectedWeather.humidity}</p>
            <p>{selectedWeather.pressure}</p>
            <p>{(new Date(selectedWeather.sunset)).toTimeString()}</p>
            <p>{(new Date(selectedWeather.sunrise)).toTimeString()}</p>
        </div>
    );
}

export default WeatherDetail;