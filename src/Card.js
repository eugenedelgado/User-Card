import React from 'react'

export default function Card(props) {
	const { name, age, gender } = props

	return (
		<>
			<div className="userCard">
				<h1>User Card</h1>
				<div>Name: {name}</div>
				<div>Age: {age}</div>
				<div>Gender: {gender}</div>
			</div>
		</>
	)
}
