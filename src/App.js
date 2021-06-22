import React, { Suspense } from 'react';
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { Component } from "react";
import { connect } from "react-redux";
import Preloader from './components/common/Preloader/Preloader';
import {
    initialize    
} from './redux/appReduser';
import { compose } from "redux";

const Music = React.lazy(() => import('./components/Music/Music'));


class App extends Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />            
        }

        return (            
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer />
                <main className="app-content">
                    <Suspense fallback={<Preloader />}>
                        <Route path="/profile/:userId?">
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
                        <Route path="/login">
                            <LoginContainer />
                        </Route>
                    </Suspense>
                </main>				
            </div>
        );
    }
    
};

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    };
} 

export default compose(    
    withRouter,
    connect(mapStateToProps, {initialize} )    
)(App);



;
