import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
    return (
        <div className="App" >
            <Header />
            <Navbar 
        //    sidebar={props.sidebar} 
           />
            <div className="App-wrapper">
                <Routes>
                    <Route path="/profile/*"
                        element={<Profile 
                           // store={props.store}
                            // updateNewPostText={props.updateNewPostText}
                            // newPostText={props.state.profilePage.newPostText}
                            // profilePage={props.state.profilePage}
                            // posts={props.state.profilePage.posts} 
                            // addPost={props.addPost}
                            // dispatch={props.dispatch}
                            />} />
                    <Route path="/dialogs/*"
                        element={<DialogsContainer
                        // store={props.store}
                        //dispatch={props.dispatch}
                            // addMessage={props.addMessage}
                         // state={props.state.messagesPage}
                           // newMessageText={props.state.messagesPage.newMessageText}
                            // updateNewMessageText={props.updateNewMessageText}
                            // messages={props.state.messagesPage.messages}
                           // dialogs={props.state.messagesPage.dialogs} 
                            />} />
                    <Route path="/music/*" element={<Music />} />
                    <Route path="/news/*" element={<News />} />
                    <Route path="/settings/*" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
}


export default App;