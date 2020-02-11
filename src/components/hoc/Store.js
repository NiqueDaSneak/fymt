import React, {createContext, useReducer} from "react";
// import Reducer from './Reducer'
import affirmationReducer from '../../store/reducers/affirmationReducer'
import affirmationState from '../../store/state/affirmationState'
import useThunkReducer from "react-hook-thunk-reducer";

// const initialState = {
//     posts: [],
//     error: null
// };

const Store = ({children}) => {
    const [state, dispatch] = useThunkReducer(affirmationReducer, affirmationState);
    return (
        <AffirmationContext.Provider value={[state, dispatch]}>
            {children}
        </AffirmationContext.Provider>
    )
};

export const AffirmationContext = createContext(affirmationState);
export default Store;