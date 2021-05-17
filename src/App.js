import "./App.css";
import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <NavbarContainer store={props.store} />
                <main className="app-content">
                    <Route path="/profile">
                        <Profile
                            store={props.store}                            
                         />
                    </Route>
                    <Route path="/dialogs">
                        <DialogsContainer
                            store={props.store}
                        />
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
