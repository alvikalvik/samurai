import { checkAuthMe } from "./authReduser";

const INITIALIZE = 'INITIALIZE';


const initialState = {        
    initialized: false,    
};

type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {       
        case INITIALIZE: 
            return {
                ...state,
                initialized: true,
            };     
    
        default:
            return state;
    }    
};

type SetInitializedActionType = {
    type: typeof INITIALIZE
}
export const setInitialized = (): SetInitializedActionType => ( {
    type: INITIALIZE,   
} );



export const initialize = () => (dispatch: any) => { 
    dispatch(checkAuthMe())
        .then(
            () => {
                dispatch(setInitialized());
            }
        );
}


export default appReducer;