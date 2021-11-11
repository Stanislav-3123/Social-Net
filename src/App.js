import logo from './logo.svg';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route, Link } from "react-router-dom";
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
                   <Route path="/content" element={<Content />} />
                   <Route path="/dialogs" element={<Dialogs />} />
                   <Route path="/dialogs" element={<Music />} />
                   <Route path="/dialogs" element={<News />} />
                   <Route path="/dialogs" element={<Settings />} />
                </Routes>
            </div>
        </div>


    );
}


export default App;