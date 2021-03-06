import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import Error from '../components/Error'

function Bookingscreen(props) {
	const [loading, setLoading] = useState(true)
	const [setError] = useState()
	const [room, setRoom] = useState()
	let { roomid } = useParams()

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true)
				const data = await (
					await axios.post('/api/rooms/getroombyid', { roomid })
				).data
				// console.log(data);
				setRoom(data)
				setLoading(false)
			} catch (error) {
				setError(true)
				console.log(error)
				setLoading(false)
			}
		}
		fetchData()
	}, [roomid, setError])
	console.log(props.name)

	return (
		<div className='booking-container'>
			{loading ? (
				<Loader />
			) : room ? (
				<div className='row booking-card'>
					<div className='col-md-6'>
						<h3>{room.name}</h3>
						<img
							src={room.imageurls[0]}
							alt={room.name}
							className='big-image'
						/>
					</div>
					<div className='col-md-6'>
						<div style={{ textAlign: 'right' }}>
							<h3>Booking Details</h3>
							<hr className='horizontal-line' />
							<p>Name : </p>
							<p>From Date : </p>
							<p>To Date : </p>
							<p>Guest Capacity : {room.guestCapacity} </p>
						</div>
					</div>
					<div style={{ textAlign: 'right' }}>
						<h3>Price To Pay</h3>
						<hr className='horizontal-line' />
						<p>Total Nights</p>
						<p>Daily Rate : {room.pricePerNight}</p>
						<p>Total Amount</p>
					</div>
					<div style={{ float: 'right' }}>
						<a href='/home' className='btn btn-dark m-2'>
							Main Page
						</a>
						<button className='btn btn-dark'>Pay Now</button>
					</div>
				</div>
			) : (
				<Error />
			)}
		</div>
	)
}

export default Bookingscreen
