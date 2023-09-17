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
	const [dataDetail, setDataDetail] = useState<string>('')
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
				setData("Below 18.5")
				setDataDetail("Underweight")
			} else if (finalIMC < 24.9) {
				setData("Between 18.5 and 24.9")
				setDataDetail("Healthy weight")
			} else if (finalIMC < 29.9) {
				setData("Between 25.0 and 29.9")
				setDataDetail("Overweight")
			} else if (finalIMC < 39.9) {
				setData("Between 30.0 and 34.9")
				setDataDetail("Obesity grade 1")
			} else {
				setData("Equal to or greater than 40")
				setDataDetail("Obesity grade 3")
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
			<main className='
				h-4/5 
				w-11/12
				sm:max-md:w-10/12
				md:max-lg:w-9/12
				lg:max-xl:w-8/12
				xl:w-7/12
				flex flex-row 
				inset-center 
				rounded-lg 
				shadow-md
				bg-dwhite' 
			>
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
					<h2 className='text-2xl text-center mb-32 mt-16 text-dgray'>
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
						lg:max-xl:h-12
						xl:h-12
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
						lg:max-xl:h-12
						xl:h-12
						' 
					/>

					<button type="submit" onClick={calculateIMC}
						className='
						h-10 
						w-11/12
						rounded
						shadow-md
						lg:max-xl:h-12
						xl:h-12
						bg-gradient-to-r from-green to-hgreen'
					>
						Calculate
					</button>

					{error && <p className='text-red text-center mt-3 text-sm'>{error}</p>}
				</form>

				<section className='w-6/12 flex flex-col items-center justify-around'>

					<div className='
						h-32 
						w-32 
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
							rounded-full
							border-gradient-to-r from-green to-hgreen'
						>
							<h3 className='text-2xl text-dgray'>
								Height
							</h3>
							<p className='text-lg text-gray'>{meter}</p>
						</div>
					</div>

					<div className='
						h-32 
						w-32 
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
							rounded-full
							border-gradient-to-r from-green to-hgreen'
						>
							<h3 className='text-2xl text-dgray'>
								Weight
							</h3>
							<p className='text-lg text-gray'>{kg}</p>
						</div>
					</div>

					<div className='
						h-32 
						w-32 
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
							rounded-full
							border-gradient-to-r from-green to-hgreen'
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

					<div className='
						h-32
						w-32 
						rounded-lg
						text-dgray
						bg-white
						shadow-md'
					>
						{
							<div className=''
							>	
								<p className='text-center pt-3 pb-10'>{dataDetail}</p>
								<p className='text-sm text-center text-gray '>
									{data}
								</p>
							</div>
						}
					</div>
				</section>
				
			</main>
		</>
	)
}


