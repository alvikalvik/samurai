import {nav, activeLink, navA} from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';
import styled from 'styled-components';

const LinksList = styled.ul`
        list-style: none;
        padding: 0;
        margin: 0;
    `;
    
const Navbar = (props) => {    
    return (
        <nav className={nav}>
            <LinksList>
                <li>
                    <NavLink
                        to="/profile"
                        activeClassName={activeLink}
                        className={navA}
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dialogs"
                        activeClassName={activeLink}
                        className={navA}
                    >
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/news"
                        activeClassName={activeLink}
                        className={navA}
                    >
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/music"
                        activeClassName={activeLink}
                        className={navA}
                    >
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/settings"
                        activeClassName={activeLink}
                        className={navA}
                    >
                        Settings
                    </NavLink>
                </li>
            </LinksList>

            <Friends
                friendsData={props.friendsData}
            />
        </nav>
    );
}

export default Navbar;