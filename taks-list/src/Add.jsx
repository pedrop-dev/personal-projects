import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link } from  'react-router-dom'
import AddStyle from './style/components/_Add.scss'

export default function Add() {
    const [tasks, setTasks] = useState('')

    const handleChange = event => {
        setTasks(event.target.value)

        console.log('value is ', event.target.value)
    } 

    return (
        <>
            <main className='add-main'>
                <section>
                    <h1>Add task</h1>
                    <form action="">
                        <input type="text" id="task" placeholder='Add your task..' onChange={handleChange} value={tasks} />
                    
                        <Link to='/' className='link'>
                            <button>Add</button>
                        </Link>
                    </form>
                </section>
            </main>
        </>
    )
}