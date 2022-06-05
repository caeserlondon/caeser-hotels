import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';

const HomeScreen = () => {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				const data = (await axios.get('/api/rooms/getallrooms')).data;
				// console.log(data);
				setRooms(data);
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
		<div className="container">
			<section className="row justify-content-center mt-5">
				{loading ? (
					<Loader />
				) : rooms.length > 1 ? (
					rooms.map((room) => {
						// console.log(room);
						return (
							<article className="col-md-9 mt-2" key={room._id}>
								<Room room={room} />
							</article>
						);
					})
				) : (
					<Error />
				)}
			</section>
		</div>
	);
};

export default HomeScreen;
