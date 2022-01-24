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

const App = () => {
    return (
        <div className="App" >
            <HeaderContainer />
            <Navbar 
        //    sidebar={props.sidebar} 
           />
            <div className="App-wrapper">
                <Routes>
                    <Route path="/profile/*"
                        element={<ProfileContainer 
                           // store={props.store}
                            // updateNewPostText={props.updateNewPostText}
                            // newPostText={props.state.profilePage.newPostText}
                            // profilePage={props.state.profilePage}
                            // posts={props.state.profilePage.posts} 
                            // addPost={props.addPost}
                            // dispatch={props.dispatch}
                            />} />
                    <Route path="/users/*" element={<UsersContaier />} />
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