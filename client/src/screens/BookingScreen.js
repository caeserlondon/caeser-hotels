import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Bookingscreen({ match }) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const [room, setRoom] = useState();

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				const data = (await axios.post('/api/rooms/getroombyid'),
				{ roomid: match.params.roomid }).data;
				// console.log(data);
				setRoom(data);
				setLoading(false);
			} catch (error) {
				setError(true);
				console.log(error);
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading ... </h1>
			) : error ? (
				<h1>Error ... </h1>
			) : (
				<div className="row">
					<div className="col-md-5">
						<h3>{room.name}</h3>
						<img
							src={room.imageurls[0]}
							alt={room.name}
							className="big-image"
						/>
					</div>
					<div className="col-md-5">
						<h3>Booking Details</h3>
						<hr className="horizontal-line" />
						<p>Name : </p>
						<p>From Date : </p>
						<p>To Date : </p>
						<p>Guest Capacity : </p>
					</div>
				</div>
			)}
		</div>
	);
}

export default Bookingscreen;
