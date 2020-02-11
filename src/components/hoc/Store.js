import React, {createContext} from "react";
// import Reducer from './Reducer'
import affirmationReducer from '../../store/reducers/affirmationReducer'
import affirmationState from '../../store/state/affirmationState'
import modalState from '../../store/state/modalState'
import modalReducer from '../../store/reducers/modalReducer'
import useThunkReducer from "react-hook-thunk-reducer";

export const AffirmationStore = ({children}) => {
  const [state, dispatch] = useThunkReducer(affirmationReducer, affirmationState);
  return (
    <AffirmationContext.Provider value={[state, dispatch]}>
      {children}
    </AffirmationContext.Provider>
  )
}

export const AffirmationContext = createContext(affirmationState);

export const ModalStore = ({children}) => {
  const [state, dispatch] = useThunkReducer(modalReducer, modalState);
  return (
    <ModalContext.Provider value={[state, dispatch]}>
      {children}
    </ModalContext.Provider>
  )
}

export const ModalContext = createContext(modalState);