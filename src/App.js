import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = (props) => {

    return (

        <div className="App" >
            <Header />
            <Navbar />
            <div className="App-wrapper">
                <Routes>
                    <Route path="/profile/*"
                        element={<Profile
                            posts={props.state.profilePage.posts} addPost={props.addPost}/>} />
                    <Route path="/dialogs/*"
                        element={<Dialogs
                            messages={props.state.messagesPage.messages}
                            dialogs={props.state.messagesPage.dialogs} />} />
                    <Route path="/music/*" element={<Music />} />
                    <Route path="/news/*" element={<News />} />
                    <Route path="/settings/*" element={<Settings />} />
                </Routes>
            </div>
        </div>


    );
}


export default App;