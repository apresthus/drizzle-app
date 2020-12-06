import React from 'react'
import SwitchComponent from "./SwitchComponent"
import "./AppBar.css"
import logo from "./placeholder_logo128.png"
export default function AppBar() {

    const toggleDegrees  = (e) =>{

    }
    return (
        <div className="AppBar">
            
    <nav className="navbar"><img src={logo} width="64px"/><ul><li>About</li><li>License & Legal</li></ul><SwitchComponent onChange={toggleDegrees}></SwitchComponent></nav>
        </div>
    )
}
