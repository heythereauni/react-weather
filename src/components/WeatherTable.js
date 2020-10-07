import React from 'react';
//Stateless or Functional Component
function WeatherTable(props){
    return (
        <div class="card my-5 py-5 px-5 text-center">
            <h1>8-days forecast</h1>
            <table className="table table-bordered table-hover table-striped">
                <thead class="table-success">
                    <tr>
                        <th>
                            Weather
                        </th>
                        <th>
                            Weather
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Temperature
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.weathers.map(val=> {
                            return(
                                <tr key={val.dt} onClick={()=>props.handleWeatherSelect(val.dt)}>
                                    <td><img src={`https://openweathermap.org/img/wn/${val.weather[0].icon}@2x.png`}/></td>
                                    <td>{val.weather[0].main}</td>
                                    <td>{(new Date(val.dt*1000)).toDateString()}</td>
                                    <td>{(val.temp.day-273.15).toFixed(0)} &deg; C</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default WeatherTable;