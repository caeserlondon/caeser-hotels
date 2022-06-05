import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Bookingscreen from './screens/BookingScreen';

function App() {
	return (
		<div className="App">
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/home" element={<HomeScreen />} />
					<Route path="/book/:roomid" element={<Bookingscreen />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
