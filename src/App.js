import logo from './logo.svg';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';


const App = (props) => {
    return (

        <div className="App" >
            <Header />
            <Navbar />
            <div className="App-wrapper">
                <Content />
                <Dialogs />
            </div>
        </div>

    );
}


export default App;