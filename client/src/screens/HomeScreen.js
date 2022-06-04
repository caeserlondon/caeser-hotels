import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeScreen = () => {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState();
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
		<div>
			{loading ? (
				<h1> Loading </h1>
			) : error ? (
				<h1> Error </h1>
			) : (
				rooms.map((room) => {
					return <h3>{room.name}</h3>;
				})
			)}
		</div>
	);
};

export default HomeScreen;
