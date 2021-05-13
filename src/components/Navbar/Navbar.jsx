import {nav, activeLink} from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={nav}>
            <ul>
                <li>
                    <NavLink
                        to="/profile"
                        activeClassName={activeLink}
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dialogs"
                        activeClassName={activeLink}
                    >
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/news"
                        activeClassName={activeLink}
                    >
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/music"
                        activeClassName={activeLink}
                    >
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/settings"
                        activeClassName={activeLink}
                    >
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>        
    );
}

export default Navbar;