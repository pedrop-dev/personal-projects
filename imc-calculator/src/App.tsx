/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import './App.css'

export default function App() {
	const [height, setHeight] = useState('')
	const [weight, setWeight] = useState('')
	const [meter, setMeter] = useState<number | null>(null)
	const [kg, setKg] = useState<number>()
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

			setMeter(heightMeters)
			setKg(weightKg)
	
			const finalIMC = weightKg / (heightMeters * heightMeters)

			if (finalIMC < 18.5) {
				setData("BMI below 18.5: Underweight")
			} else if (finalIMC < 24.9) {
				setData("BMI between 18.5 and 24.9: Healthy weight")
			} else if (finalIMC < 29.9) {
				setData("BMI between 25.0 and 29.9: Overweight")
			} else if (finalIMC < 39.9) {
				setData("BMI between 30.0 and 34.9: Obesity grade 1")
			} else {
				setData("BMI equal to or greater than 40: Obesity grade 3")
			}
			
			setIMC(finalIMC)
			setError('')
			setHeight('')
			setWeight('')
		}
		
	}

	return (
		<>
			<header>
				{/*<h1 className='text-2xl text-center font-sans font-bold text-dgreen'>
					IMC Calculator
				</h1>*/}
			</header>
			<main className='h-4/5 w-11/12 flex flex-row bg-dwhite inset-center rounded-lg shadow-md'>
				<form 
					className='
					h-full 
					w-3/6 
					p-3.5
					flex
					flex-col
					items-center
					rounded-l-lg
					bg-white'
				>
					<h2 className='text-xl text-center mb-32 text-dgray'>
						Calculate your IMC
					</h2>
					<input 
						type="number" 
						placeholder='Height' 
						value={height} 
						onChange={(e) => setHeight(e.target.value)}
						className='
							h-10 
							w-11/12 
							mb-8 
							rounded 
							pl-2.5 
							outline-0
							[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
							' 
					/>

					<input 
						type="number" 
						placeholder='Weight' 
						value={weight} 
						onChange={(e) => setWeight(e.target.value)}
						className='
							h-10 
							w-11/12 
							mb-8 
							rounded 
							pl-2.5 
							outline-0
							[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
							' 
					/>

					<button type="submit" onClick={calculateIMC}
						className='
						h-10 
						w-11/12
						rounded
						bg-green
						shadow-md'
					>
						Calculate
					</button>

					{error && <p className='text-red text-center mt-3 text-sm'>{error}</p>}
				</form>

				<section className='w-6/12 flex flex-col items-center justify-around'>

					<div className='
						h-36 
						w-36 
						flex 
						items-center 
						justify-center 
						rounded-lg 
						bg-white
						shadow-md'
					>
						<div className='
							h-5/6 
							w-5/6 
							flex 
							flex-col
							items-center 
							justify-center 
							border-4 
							border-green 
							rounded-full'
						>
							<h3 className='text-2xl text-dgray'>
								Height
							</h3>
							<p className='text-lg text-gray'>{meter}</p>
						</div>
					</div>

					<div className='
						h-36 
						w-36 
						flex 
						items-center 
						justify-center 
						rounded-lg 
						bg-white
						shadow-md'
					>
						<div className='
							h-5/6 
							w-5/6 
							flex 
							flex-col
							items-center 
							justify-center 
							border-4 
							border-green 
							rounded-full'
						>
							<h3 className='text-2xl text-dgray'>
								Weight
							</h3>
							<p className='text-lg text-gray'>{kg}</p>
						</div>
					</div>

					<div className='
						h-36 
						w-36 
						flex 
						items-center 
						justify-center 
						rounded-lg 
						bg-white
						shadow-md'
					>
						<div className='
							h-5/6 
							w-5/6 
							flex 
							flex-col
							items-center 
							justify-center 
							border-4 
							border-green 
							rounded-full'
						>
							<h3 className='text-2xl text-dgray'>
								IMC
							</h3>
							{imc !== null && (
								<p className='text-lg text-gray'>
									{imc.toFixed(2)}
								</p>
							)}
						</div>
					</div>

					<div className='w-36 text-center'>
						{
							<p className='text-sm'>
								{data}
							</p>
						}
					</div>
				</section>
				
			</main>
		</>
	)
}


