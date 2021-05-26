import "./App.css";
import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <NavbarContainer />
                <main className="app-content">
                    <Route path="/profile">
                        <ProfileContainer />
                    </Route>
                    <Route path="/dialogs">
                        <DialogsContainer />
                    </Route>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route path="/music">
                        <Music />
                    </Route>
                    <Route path="/users">
                        <UsersContainer />
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
