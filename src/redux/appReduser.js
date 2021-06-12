import { checkAuthMe } from "./authReduser";

const INITIALIZE = 'INITIALIZE';


const initialState = {        
    initialized: false,    
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {       
        case INITIALIZE: 
            return {
                ...state,
                initialized: true
            };     
    
        default:
            return state;
    }    
};

export const setInitialized = () => ( {
    type: INITIALIZE,   
} );



export const initialize = () => (dispatch) => { 
    dispatch(checkAuthMe())
        .then(
            () => {
                dispatch(setInitialized());
            }
        );
}


export default appReducer;