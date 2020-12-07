import React, { useState } from 'react';
import "./weatherInfo.css"
import axios from "axios";
import "../weather-icons.min.css"
const API_KEY= "ae9bdd8573c8ff07dc13557211bfa5f8"



    const WeatherInfoComponent = (props) => {
        const {location} = props;
        const REQUESTURL =`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
        let weather, temperature, feelslike = "";
        let [responseObj, setCurrentTemperature] = useState({});
        function getCurrentWeather(){
                axios.get(REQUESTURL).then((res) =>{
                    setCurrentTemperature(res)
                }).catch((error) => {throw new Error(`Something went wrong:${error}` )})
              
               
        }
    return (
    <div className="weatherInfo">      
   <span className="degrees">26º</span> <span className="locName">{props.location}</span>
   <div className="subInfo">
   <div className="weatherType"><i style={{fontSize:"2em"}} class="wi wi-day-sunny"></i><p className="time">13:00 CET </p> </div>
   <div className="weatherType"><i style={{fontSize:"2em"}} class="wi wi-day-sunny"></i><p className="time">December 7th </p> </div>
   <div className="weatherType"><i style={{fontSize:"2em"}} class="wi wi-day-sunny"></i><p className="time">Light Clouds </p> </div></div>
        <div>
        {JSON.stringify(responseObj)}
        </div>
      
    </div>
    )

}
export default WeatherInfoComponent

