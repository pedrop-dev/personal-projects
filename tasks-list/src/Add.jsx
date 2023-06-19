/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link } from  'react-router-dom'
import AddStyle from './style/components/_Add.scss'

export default function Add() {
   

    return (
        <>
            <main className='add-main'>
                <section>
                    <h1>Add task</h1>
                    <form>
                        <input type="text" id="task" placeholder='Add your task..'/>
                    
                        <Link to='/' className='link'>
                            <button type='submit'>
                                Add
                            </button>
                        </Link>
                    </form>
                </section>
            </main>
        </>
    )
}