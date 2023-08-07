/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function App() {
	const [minutes, setMinutes] = useState(25)
	const [seconds, setSeconds] = useState(0)

	useEffect(() => {
		
		let interval = setInterval(() => {
			clearInterval(interval)

			setSeconds(prevCount => prevCount - 1)

			if (seconds === 0) {
				if (minutes !== 0) {
					setMinutes(minutes - 1)
					setSeconds(59)
				} else {
					//
				}
			} else {
				setSeconds(seconds - 1)
			}
		}, [1000])
	}, [seconds])

	function handleStart() {
	}

	return (
    <>
		<header>
			<h1>Pomodoro</h1>
		</header>
		<main>
			<section>
				<div>
					<p>{minutes} : {seconds}</p>
				</div>
				<input type="button" value="Start" onClick={handleStart}/>
			</section>
		</main>
    </>
  )
}


