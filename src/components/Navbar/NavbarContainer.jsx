import Navbar from './Navbar';
import {connect} from 'react-redux';

    
// const NavbarContainer = (props) => {    
//     return (
//         <Navbar 
//             friendsData={props.store.getState().navbar.friends}
//         />
//     );
// }

const mapStateToProps = (state) => {
    return {
        friendsData: state.navbar.friends,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;