import React from 'react'
import "./upcomingComponent.css"
import "./weather-icons.min.css"
export default function UpcomingComponent() {
    return (
        <div className="upcomingWrapper">
            <div className="upcomingInfo"><p>Mon</p><i style={{fontSize:"2em",color:"#24252b"}} class="wi wi-day-cloudy"></i><p className="degree">23º </p> </div>
            <div className="upcomingInfo"><p>Tue</p><i style={{fontSize:"2em",color:"#24252b"}} class="wi wi-day-sunny"></i><p className="degree">23º </p> </div>
            <div className="upcomingInfo"><p>Wed</p><i style={{fontSize:"2em",color:"#24252b"}} class="wi wi-day-rain-mix"></i><p className="degree">23º </p> </div>
            <div className="upcomingInfo"><p>Thu</p><i style={{fontSize:"2em",color:"#24252b"}} class="wi wi-day-windy"></i><p className="degree">23º </p> </div>
            <div className="upcomingInfo"><p>Fri</p><i style={{fontSize:"2em",color:"#24252b"}} class="wi wi-day-rain"></i><p className="degree">23º </p> </div>
        </div>
    )
}
