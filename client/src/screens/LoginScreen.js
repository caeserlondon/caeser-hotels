import { useState } from 'react';
import axios from 'axios';

import Error from '../components/Error';
import Loader from '../components/Loader';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const Login = async () => {
		const user = {
			email,
			password,
		};

		try {
			setLoading(true);
			const result = await axios.post('/api/users/login', user).data;
			setLoading(false);
			localStorage.setItem('currentUser', JSON.stringify(result));
			window.location.href = '/';
		} catch (error) {
			setError(true);
			setLoading(false);
			console.log(error);
		}
	};

	return (
		<div>
			{loading && <Loader />}
			<div className="row justify-content-center mt-5">
				<div className="col-md-5">
					<div>
						<h3>Login</h3>
						{error && <Error error="Invalid Credentials" />}
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

						<button className="btn btn-primary" onClick={Login}>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
