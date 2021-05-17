import Navbar from './Navbar';

    
const NavbarContainer = (props) => {    
    return (
        <Navbar 
            friendsData={props.store.getState().navbar.friends}
        />
    );
}

export default NavbarContainer;