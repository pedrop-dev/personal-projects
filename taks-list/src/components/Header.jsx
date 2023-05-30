import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link } from  'react-router-dom'
import Add from '../Add'
import HeaderStyle from '../style/components/_Header.scss'

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
                    <Link to='/Add'>
                        <button>Add new</button>
                    </Link>
                </div>
            </header>
        </>
    )
}