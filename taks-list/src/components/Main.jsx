import React from 'react'
import ReactDOM from 'react-dom'
import MainStyle from '../style/components/_Main.scss'

import Add from '../Add'

export default function Main() {
    const week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

    const date = new Date()
    const day = date.getDate()
    const weekDay = week[date.getDay()]

    return (
        <>
            <main className='main'>
                <div className='main-header'>
                    <div className='main-header-box'>
                        <h3>{day}</h3>
                        <p>{weekDay}</p>
                    </div>
                    <div className="main-body">
                        <div className='tasks'>
                            <label className='container'>
                                <input type="checkbox"/>
                                <span className='checkmark'></span>
                                <p>
                                    Lorem ipsum
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}