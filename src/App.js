import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from 'react-router-dom';


const App = ({state, addPost}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar state={state.navbar} />
                <main className="app-content">
                    <Route path="/profile">
                        <Profile
                            state={state.profilePage}
                            addPost={addPost} />
                    </Route>
                    <Route path="/dialogs">
                        <Dialogs state={state.dialogsPage} />
                    </Route>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route path="/music">
                        <Music />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                </main>				
            </div>
        </BrowserRouter>		
    );
};

export default App;
