import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import BookingScreen from './screens/BookingScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path='/home' element={<HomeScreen />} />
					<Route path='/book/:roomid' element={<BookingScreen />} />
					<Route path='/register' element={<RegisterScreen />} />
					<Route path='/login' element={<LoginScreen />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
