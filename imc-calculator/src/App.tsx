/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import './App.css'

export default function App() {
	const [height, setHeight] = useState('')
	const [weight, setWeight] = useState('')
	const [imc, setIMC] = useState<number | null>(null)
	const [data, setData] = useState<string>('')
	const [error, setError] = useState<string>('')

	function calculateIMC(e: { preventDefault: () => void }) {
		e.preventDefault()

		if (!height || !weight) {
			setError("Input fields cannot be empty")
			setIMC(null)
		} else {
			const heightMeters = parseFloat(height) / 100
			const weightKg = parseFloat(weight)
	
			const finalIMC = weightKg / (heightMeters * heightMeters)

			if (finalIMC < 18.5) {
				setData("IMC abaixo de 18,5: Abaixo do peso")
			} else if (finalIMC < 24.9) {
				setData("IMC entre 18,5 e 24,9: Peso saudável")
			} else if (finalIMC < 29.9) {
				setData("IMC entre 25,0 e 29,9: Sobrepeso")
			} else if (finalIMC < 39.9) {
				setData("IMC entre 30,0 e 34,9: Obesidade grau 1")
			} else {
				setData("IMC igual ou superior a 40,0: Obesidade grau 3 (obesidade mórbida)")
			}
			
			setIMC(finalIMC)
			setError('')
			setHeight('')
			setWeight('')
		}
		
	}

	return (
		<>
			<main>
				<h1>
					IMC Calculator
				</h1>

				<form>
					<input 
						type="number" 
						placeholder='Height' 
						value={height} 
						onChange={(e) => setHeight(e.target.value)}
						className='' 
					/>

					<input 
						type="number" 
						placeholder='Weight' 
						value={weight} 
						onChange={(e) => setWeight(e.target.value)}
						className='' 
					/>

					<button type="submit" onClick={calculateIMC}>Calculate</button>
				</form>
				<section>
					{imc !== null && (
						<div>
							<p>{imc.toFixed(2)}</p>
							<p>
								{data}
							</p>
						</div>
					)}

					{error && <p>{error}</p>}
				</section>
				
			</main>
		</>
	)
}


