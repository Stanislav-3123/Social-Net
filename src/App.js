import './App.css';
// import Profile from './components/Profile/Profile';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContaier from './components/Users/UsersContaier';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';

const App = () => {
	return (
		<div className="App" >
			<HeaderContainer />
			<Navbar />
			<div className="App-wrapper">
				<Routes>
					<Route path="/profile/*"
						element={<ProfileContainer />} />
					<Route path="/users/*" element={<UsersContaier />} />
					<Route path="/dialogs/*"
						element={<DialogsContainer />} />
					<Route path="/music/*" element={<Music />} />
					<Route path="/news/*" element={<News />} />
					<Route path="/settings/*" element={<Settings />} />
					<Route path="/login/*" element={<LoginPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;