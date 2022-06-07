import axios from 'axios';
import { useState } from 'react';

import Error from '../components/Error';
import Loader from '../components/Loader';
import Success from '../components/Success';

const RegisterScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const register = async () => {
		if (password !== confirmPassword) {
			alert('Please enter matching passwords');
		} else {
			const user = {
				name,
				email,
				password,
			};

			try {
				setLoading(true);

				await axios.post('/api/users/register', user).data;
				setLoading(false);

				setName('');
				setEmail('');
				setPassword('');
				setConfirmPassword('');
			} catch (error) {
				setLoading(false);
				setError(true);
				console.log(error);
			}
		}
	};

	return (
		<div className="register">
			<div className="row justify-content-center mt-5">
				<div className="col-md-5">
					{loading && <Loader />}

					{error && <Error error="Email already registred" />}

					<h3 className="text-center m-2">Register</h3>

					<div>
						<input
							type="text"
							className="form-control"
							placeholder="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="email"
							className="form-control"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="text"
							className="form-control"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<input
							type="text"
							className="form-control"
							placeholder="Confirm Password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<button className="btn btn-primary" onClick={register}>
							Register
						</button>
						<br />
						<a style={{ color: 'black' }} href="/login">
							Click Here To Login
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
