import React, { createContext } from "react";
import { useThunkReducer } from 'react-hook-thunk-reducer'
import affirmationState from './affirmationState'
import affirmationReducer from '../reducers/affirmationReducer'

export const AffirmationContext = createContext()

export const AffirmationProvider = ({children}) => {
  const [state, dispatch] = useThunkReducer(affirmationReducer, affirmationState);
  return(
    <AffirmationContext.Provider value={{state, dispatch}}>
      {children}
    </AffirmationContext.Provider>
  )
}