import React, {createContext} from "react";
// import Reducer from './Reducer'
import affirmationReducer from '../../store/reducers/globalReducer'
import initialState from '../../store/state/initialState'
// import modalState from '../../store/state/modalState'
// import modalReducer from '../../store/reducers/modalReducer'
import useThunkReducer from "react-hook-thunk-reducer";

export const GlobalStore = ({children}) => {
  const [state, dispatch] = useThunkReducer(affirmationReducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  )
}

export const GlobalContext = createContext(initialState);

// export const ModalStore = ({children}) => {
//   const [state, dispatch] = useThunkReducer(modalReducer, modalState);
//   return (
//     <ModalContext.Provider value={[state, dispatch]}>
//       {children}
//     </ModalContext.Provider>
//   )
// }

// export const ModalContext = createContext(modalState);