import { useState } from 'react';
import axios from 'axios';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const Login = async () => {
		const user = {
			email,
			password,
		};

		try {
			const result = await axios.post('/api/users/login', user).data;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-5">
					<div>
						<h3>Login</h3>

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
