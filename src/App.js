import logo from './logo.svg';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route, Link } from "react-router-dom";

const App = (props) => {
    return (

        <div className="App" >
            <Header />
            <Navbar />
            <div className="App-wrapper">
                <Routes>
                   <Route path="/content" element={<Content />} />
                   <Route path="/dialogs" element={<Dialogs />} />
                   <Route path="/dialogs" element={<Dialogs />} />
                   <Route path="/dialogs" element={<Dialogs />} />
                   <Route path="/dialogs" element={<Dialogs />} />
                </Routes>
            </div>
        </div>


    );
}


export default App;