import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<div className="App">
			<Navbar />
			<BrowserRouter>
				{/* <Route path="/home" exact component={HomeScreen} /> */}
				<Route path="/home" element={<HomeScreen />} />
			</BrowserRouter>
		</div>
	);
}

export default App;
