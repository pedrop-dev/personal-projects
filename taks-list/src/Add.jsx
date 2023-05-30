import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link } from  'react-router-dom'
import AddStyle from './style/components/_Add.scss'

export default function Add() {
    return (
        <>
            <main>
                <section>
                    <form>
                        <label htmlFor="task">
                            Task
                        </label>
                        <input type="text" id="task" />
                    </form>
                    <Link to='/'>
                        <button>Add</button>
                    </Link>
                </section>
            </main>
        </>
    )
}