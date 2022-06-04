import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Room = ({ room }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
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
					<button onClick={handleShow} className="btn btn-dark">
						View Details
					</button>
				</div>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{room.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Room;
