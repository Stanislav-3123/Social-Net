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
            <Navbar 
            friendsOnline={props.state.sideBar.friendsOnline} />
            <div className="App-wrapper">
                <Routes>
                    <Route path="/profile/*"
                        element={<Profile 
                            // updateNewPostText={props.updateNewPostText}
                            newPostText={props.state.profilePage.newPostText}
                            profilePage={props.state.profilePage}
                            posts={props.state.profilePage.posts} 
                            // addPost={props.addPost}
                            dispatch={props.dispatch}
                            />} />
                    <Route path="/dialogs/*"
                        element={<Dialogs
                            addMessage={props.addMessage}
                            messagesPage={props.state.messagesPage}
                            newMessageText={props.state.messagesPage.newMessageText}
                            updateNewMessageText={props.updateNewMessageText}
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