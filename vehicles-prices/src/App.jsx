/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'

export default function App() {
	async function getResponse() {
		const response = await fetch(
			""
		)
		const data = await response
		console.log(data)
	}

	return (
    <>
		<header>
			<h1>API</h1>
		</header>
		<main>
			{/*<form action='GET'>
				<input 
					type="text" 
					className="input_text" 
					placeholder='Nome do veículo' 
				/>

				<input 
					type="submit" 
					value="Procurar" 
					onClick={getResponse}
				/>
	</form>*/}
			<button onClick={getResponse}>test</button>
		</main>
    </>
  )
}


