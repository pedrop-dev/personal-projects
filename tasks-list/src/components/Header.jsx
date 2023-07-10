import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../style/components/_Header.scss'

export default function Header() {
    const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const date = new Date()
    const day = date.getDate()
    const month = months[date.getMonth()]

    const [modal, setModal] = useState(false)

    const handleClick = () => {
        setModal(!modal)
    }

    return (
        <>
            <header className="header">
                <div className="hbox1">
                    <h2>Task List</h2>
                    <h3>Today</h3>
                    <p>0 tasks</p>
                </div>
                <div className="hbox2">
                    <h3>{`${month} ${day}`}</h3>
                    <button onClick={handleClick}>
                        Add new
                    </button>
                </div>
            </header>
        </>
    )
}