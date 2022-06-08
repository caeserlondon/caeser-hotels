import React from 'react';

function Navbar() {
	const user = JSON.parse(window.localStorage.getItem('currentUser'));

	const logOut = () => {
		localStorage.removeItem('currentUser');
		window.location.href = '/login';
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand" href="/home">
						Caeser's Hotels
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon">
							<i className="fa fa-bars"></i>
						</span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav mr-5">
							{user ? (
								<>
									<div className="dropdown">
										<button
											className="btn btn-secondary dropdown-toggle"
											type="button"
											id="dropdownMenuButton1"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="fa fa-user"></i> {user.name}
										</button>
										<div
											className="dropdown-menu"
											aria-labelledby="dropdownMenuButton"
										>
											<a className="dropdown-item" href="#">
												Bookings
											</a>
											<a className="dropdown-item" onClick={logOut} href="#">
												Log Out
											</a>
										</div>
									</div>
								</>
							) : (
								<>
									<li className="nav-item">
										<a className="nav-link" href="/register">
											Register
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="/login">
											Login
										</a>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
