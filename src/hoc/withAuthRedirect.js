import { Redirect } from "react-router";
import {connect} from 'react-redux';

const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.isAutorized) {            
            return <Redirect to='/login' />            
        }

        return <Component {...props} />
    }

    const mapStateToProps = (state) => ({
        isAutorized: state.auth.isAutorized,
    })

    RedirectComponent = connect(mapStateToProps)(RedirectComponent);    

    return RedirectComponent;
}

export default withAuthRedirect;