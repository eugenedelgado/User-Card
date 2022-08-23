import React from 'react'
import './App.css'
import Card from './Card'

export default function App() {
	return (
		<>
			<div className="card-container">
				<Card name="Eugene" age={22} gender="Male" />
				<Card name="Josie" age={21} gender="Female" />
				<Card name="Joshua" age={22} gender="Male" />
				<Card name="Aila" age={22} gender="Female" />
			</div>
		</>
	)
}
