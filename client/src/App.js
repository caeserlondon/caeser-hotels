import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<div className="App">
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/home" element={<HomeScreen />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
