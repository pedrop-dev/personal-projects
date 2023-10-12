/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import './style/TasksPage.scss'

//Icons

import { FaRegTrashAlt } from "react-icons/fa"

export default function TaskApp() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const [tasksNumber, setTasksNumber] = useState(0)

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks')
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks))
            setTasksNumber(JSON.parse(storedTasks).length)
        }

    }, [])

    const updateLocalStorage = (tasksData) => {
        localStorage.setItem('tasks', JSON.stringify(tasksData))
    }

    function handleAddTask(e) {
        e.preventDefault()

        if (newTask === '') {
            console.log(error)
        } else {
            const updatedTasks = [...tasks, newTask]
            setTasks(updatedTasks)
            setNewTask('')
            setTasksNumber(updatedTasks.length)

            updateLocalStorage(updatedTasks)
        }
    }

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasksNumber(updatedTasks.length)
        setTasks(updatedTasks);

        updateLocalStorage(updatedTasks)
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
                    <h2>Simple Tasks App</h2>
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
                            maxLength={30}
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
                                    <p>{task.toLowerCase()}</p>
                                    <button 
                                        onClick={() => {
                                            handleDeleteTask(index)
                                            setTasksNumber(tasks.length - 1)
                                        }}
                                        className='li_delete_button'>
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