import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
					<Link to={`/book/${room._id}`}>
						<button className="btn btn-dark m-2">Book Now</button>
					</Link>

					<button onClick={handleShow} className="btn btn-dark">
						View Details
					</button>
				</div>
			</div>

			<Modal show={show} onHide={handleClose} size="lg">
				<Modal.Header>
					<Modal.Title>{room.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Carousel fade>
						{room.imageurls.map((url) => (
							<Carousel.Item key={url}>
								<img
									className="d-block w-100 big-img"
									src={url}
									alt={room.name}
								/>
							</Carousel.Item>
						))}
					</Carousel>
					<p>{room.description}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="dark" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Room;
