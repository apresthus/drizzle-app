import React from 'react'
import "./switch.css"
export default function SwitchComponent() {
    return (
        <label className="switch">
        <input type="checkbox"/>
        <span className="slider round"></span>
      </label>
    )
}
