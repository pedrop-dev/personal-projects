/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import './style/TasksPage.scss'

//Icons

import { FaRegTrashAlt } from "react-icons/fa"

export default function TaskApp() {
    const [tasks, setTask] = useState([])
    const [newTask, setNewTask] = useState('')

    const [tasksNumber, setTasksNumber] = useState(0)

    function handleAddTask(e) {
        e.preventDefault()
        
        newTask == ''  ? 
        console.log('error') : 
        setTask([...tasks, newTask])
        setNewTask('')

        setTasksNumber(tasks.length + 1)
    }

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }

    const d = new Date()
    const date = d.getDate()

    const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

    let day = weekday[d.getDay()];
    const month = monthName[d.getMonth()]

    return (
        <>
            <header className='header'>
                <section className='header_section'>
                    <h2>Tasks App</h2>
                    <h2>{date + ' ' + month}</h2>
                </section>
                <aside className='header_aside'>
                    <div>
                        <h2>Today</h2>
                        <p>{tasksNumber} tasks</p>
                    </div>
                    <form onSubmit={handleAddTask}>
                        <input
                            type="text"
                            placeholder="Add task"
                            className="form_input_text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            minLength={1}
                            maxLength={33}
                        />

                        <input 
                            type="submit" 
                            value="Add task" 
                            className='form_input_submit'
                        />
                    </form>
                </aside>
            </header>

            <main className='main'>
                <section className='main_section_date'>
                    <div className='main_section_div'>
                        <h2>{date}</h2>
                        <p>{day}</p>
                    </div>
                </section>
                <section className='main_section_tasks'>
                    <ul>
                        {
                            tasks.map((task, index) => (
                                <li key={Math.random() * 1000}>
                                    <p>{task}</p>
                                    <button onClick={() => handleDeleteTask(index)} className='li_delete_button'>
                                        <FaRegTrashAlt className='trash_icon'/>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>

                </section>
            </main>
        </>    
    )
}