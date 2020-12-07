import React from 'react'
import "./upcomingComponent.css"
import "./weather-icons.min.css"
export default function UpcomingComponent() {
    return (
        <div className="upcomingWrapper">
            <div className="upcomingInfo"><p>Mon</p><i style={{fontSize:"2em"}} class="wi wi-day-sunny"></i><p className="degree">23º </p> </div>
            <div className="upcomingInfo"><p>Thu</p><i style={{fontSize:"2em"}} class="wi wi-day-sunny"></i><p className="degree">23º </p> </div>
            <div className="upcomingInfo"><p>Wed</p><i style={{fontSize:"2em"}} class="wi wi-day-sunny"></i><p className="degree">23º </p> </div>
            <div className="upcomingInfo"><p>Thu</p><i style={{fontSize:"2em"}} class="wi wi-day-sunny"></i><p className="degree">23º </p> </div>
            <div className="upcomingInfo"><p>Fri</p><i style={{fontSize:"2em"}} class="wi wi-day-sunny"></i><p className="degree">23º </p> </div>
            <div className="upcomingInfo"><p>Sat</p><i style={{fontSize:"2em"}} class="wi wi-day-sunny"></i><p className="degree">23º </p> </div>
        </div>
    )
}
