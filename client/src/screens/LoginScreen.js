import { useState } from 'react';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const Login = () => {
		const user = {
			email,
			password,
		};
		console.log(user);
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
