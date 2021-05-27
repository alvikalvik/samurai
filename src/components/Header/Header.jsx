import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const {header, login} = styles;

const Header = (props) => {
    let loginBlockContent;  

    if (props.isFetching) {
        loginBlockContent = 'Loading...';
    } else {
        loginBlockContent = props.isAutorized
                                ? props.login
                                : <NavLink to={`/login`}>
                                    Login
                                  </NavLink>;
    }  

    return (
        <header className={header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo" />

            <div className={login}>
                {loginBlockContent}                
            </div>
        </header>
    );
}

export default Header;