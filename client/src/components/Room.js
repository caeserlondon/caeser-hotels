import React from 'react';

const Room = ({ room }) => {
	return (
		<div className="row room-card">
			<div className="col-md-4">
				<img src={room.imageurls[0]} alt={room.name} className="small-img" />
			</div>
			<div className="col-md-7 text-left">
				<h3>{room.name}</h3>
				<p>{room.description}</p>
				<h6> Guest Capacity: {room.guestCapacity} </h6>
				<h6> Price Per Night: ${room.pricePerNight} </h6>
				<h6>Located at: {room.address} </h6>
				<div style={{ float: 'right' }}>
					<button className="btn btn-dark">View Details</button>
				</div>
			</div>
		</div>
	);
};

export default Room;
