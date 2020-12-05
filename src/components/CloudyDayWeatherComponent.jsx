import React from 'react'
import "../weather/cloudy/cloudy.css";
import cloud1 from "../weather/cloudy/cloud1.png"
import cloud2 from "../weather/cloudy/cloud2.png"
import cloud3 from "../weather/cloudy/cloud3.png"
import cloud4 from "../weather/cloudy/cloud4.png"
import cloud5 from "../weather/cloudy/cloud5.png"

///////////////////////////
/// Based on https://www.youtube.com/watch?v=4p3YDQLJmSs&t=235s
///////////////////////////


export default function CloudyDayWeatherComponent(props) {
    var style1 = { "--i": 1 }
    var style2 = { "--i": 2 }
    var style3 = { "--i": 3 }
    var style4 = { "--i": 4 }
    var style5 = { "--i": 5 }
    var style6= { "--i": 10 }
    var style7 = { "--i": 9 }
    var style8 = { "--i": 8 }
    var style9 = { "--i": 7 }
    var style10 = { "--i": 6 }
    return (
        <div className="container clouds">
       <img style={style1} src={cloud1} alt="white cloud used to simulate weather conditions when cloudy."/>
       <img style={style2} src={cloud2} alt="white cloud used to simulate weather conditions when cloudy."/>
       <img style={style3} src={cloud3} alt="white cloud used to simulate weather conditions when cloudy."/>
       <img style={style4} src={cloud4} alt="white cloud used to simulate weather conditions when cloudy."/>
       <img style={style5} src={cloud5} alt="white cloud used to simulate weather conditions when cloudy."/>
       <img style={style6} src={cloud1} alt="white cloud used to simulate weather conditions when cloudy."/>
       <img style={style7} src={cloud2} alt="white cloud used to simulate weather conditions when cloudy."/>
       <img style={style8} src={cloud3} alt="white cloud used to simulate weather conditions when cloudy."/>
       <img style={style9} src={cloud4} alt="white cloud used to simulate weather conditions when cloudy."/>
       <img style={style10} src={cloud5} alt="white cloud used to simulate weather conditions when cloudy."/>
        </div>
    )
}
