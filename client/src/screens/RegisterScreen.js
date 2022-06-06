import axios from 'axios';
import { useState } from 'react';

const RegisterScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const register = async () => {
		if (password === confirmPassword) {
			const user = {
				name,
				email,
				password,
				confirmPassword,
			};
			console.log(user);

			try {
				const result = await axios.post('/api/users/register', user).data;
			} catch (error) {
				console.log(error);
			}
		} else {
			alert('Please enter matching passwords');
		}
	};

	return (
		<div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-5">
					<div>
						<h3>Register</h3>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
