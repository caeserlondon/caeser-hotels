import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Room from '../components/Room'
import Loader from '../components/Loader'
import Error from '../components/Error'

// import { DatePicker, Space } from 'antd';
import { DatePicker } from 'antd'
import moment from 'moment'

const HomeScreen = () => {
	const [rooms, setRooms] = useState([])
	const [loading, setLoading] = useState(true)
	const [setError] = useState()

	const { RangePicker } = DatePicker
	const [fromDate, setFromDate] = useState()
	const [toDate, setToDate] = useState()

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true)
				const data = (await axios.get('/api/rooms/getallrooms')).data
				// console.log(data);
				setRooms(data)
				setLoading(false)
			} catch (error) {
				setError(true)
				console.log(error)
				setLoading(false)
			}
		}
		fetchData()
		// }, []);
	}, [setError, setLoading])

	const filterByDate = (dates) => {
		setFromDate(moment(dates[0]).format('DD-MM-YYYY'))
		setToDate(moment(dates[1]).format('DD-MM-YYYY'))
	}

	return (
		<div className='container'>
			<div className='row mt-5 '>
				<div className='col-md-4'>
					<RangePicker
						format='DD-MM-YYYY'
						className='range-picker'
						onChange={filterByDate}
					/>
				</div>
			</div>

			<section className='row justify-content-center mt-5'>
				{loading ? (
					<Loader />
				) : rooms.length > 1 ? (
					rooms.map((room) => {
						// console.log(room);
						return (
							<article className='col-md-9 mt-2' key={room._id}>
								<Room room={room} fromDate={fromDate} toDate={toDate} />
							</article>
						)
					})
				) : (
					<Error />
				)}
			</section>
		</div>
	)
}

export default HomeScreen
