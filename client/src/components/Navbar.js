import React from 'react';

function Navbar() {
	const user = JSON.parse(window.localStorage.getItem('currentUser'));
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
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav mr-auto">
							{user ? (
								<>
									<h3>{user.name}</h3>
								</>
							) : (
								<>
									<li className="nav-item">
										<a
											className="nav-link active"
											aria-current="page"
											href="/register"
										>
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
