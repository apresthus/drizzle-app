import React, { useState } from 'react';
import "./weatherInfo.css"
import axios from "axios";
const API_KEY= "ae9bdd8573c8ff07dc13557211bfa5f8"
const REQUESTURL =`http://api.openweathermap.org/data/2.5/weather?q=seattle&appid=${API_KEY}`;


    const WeatherInfoComponent = () => {
        let [responseObj, setCurrentTemperature] = useState({});
        function getCurrentWeather(){
                axios.get(REQUESTURL).then((res) =>{
                    setCurrentTemperature(res)
                }).catch((error) => {throw new Error(`Something went wrong:${error}` )})

        }
    

    return (
        <div className="weatherInfo">
        <h2>Find Current Weather Conditions</h2>
        <div>
            {JSON.stringify(responseObj)}
        </div>
        <button onClick={getCurrentWeather}>Get Temperatures</button>
    </div>
    )

}
export default WeatherInfoComponent

