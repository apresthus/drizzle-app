import React from 'react'
import SwitchComponent from "./SwitchComponent"
import "./AppBar.css"
export default function AppBar() {

    const toggleDegrees  = (e) =>{

    }
    return (
        <div className="AppBar">
            
            <nav className="navbar">Drizzle Weather App<ul><li>About</li><li>License & Legal</li></ul><SwitchComponent onChange={toggleDegrees}></SwitchComponent></nav>
        </div>
    )
}
