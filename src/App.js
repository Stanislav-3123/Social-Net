import './App.css';
import React, { Suspense } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContaier from './components/Users/UsersContaier';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';
import Preloader from './common/preloader/preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const App = () => {
	return (
		<Suspense fallback={<Preloader />}>
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
		</Suspense>
	);
}

export default App;