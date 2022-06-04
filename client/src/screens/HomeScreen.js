import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeScreen = () => {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = (await axios.get('/api/rooms/getallrooms')).data;

				console.log(data);
				setRooms(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return (
		<div>
			<h1>Home Screen</h1>
			<h1>there are {rooms.length} rooms </h1>
		</div>
	);
};

export default HomeScreen;
