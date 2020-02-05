import React, {useReducer} from 'react'
import ReactDOM from 'react-dom'
import styled, {createGlobalStyle} from 'styled-components'
import MainApp from './views/MainApp'
import Admin from './views/Admin'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {affirmationRef, affirmationCategoryRef} from './firebase'

// import * as serviceWorker from '../serviceWorker'

const GlobalStyle = createGlobalStyle`
  * { padding: 0; margin: 0; }
  html, body {
    background: black;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    min-height:100%;
    height:100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const reducer = (state, action) => {
  switch (action.type) {
    case 'submitAffirmation':
        affirmationCategoryRef.orderByChild("name").equalTo(action.affirmationCategory).once("value",snapshot => {
          if (snapshot.exists()){
            affirmationRef.push().update({affirmation: action.affirmationText, category: action.affirmationCategory})
            .then( err => {
              if (err) {
                // The write failed...
                console.log(err)
                throw new Error();
                } else {
                // Data saved successfully!
                console.log('finished')
                }
  
            })
          } else {
            affirmationCategoryRef.push().update({categoryName: action.affirmationCategory})
            .then( err => {
              if (err) {
                // throw err
              } else {
                // data was saved
                affirmationRef.push().update({affirmation: action.affirmationText, category: action.affirmationCategory})
                .then( err => {
                  if (err) {
                    // The write failed...
                    console.log(err)
                    throw new Error();
                    } else {
                    // Data saved successfully!
                    console.log('finished')
                    }
                })
              }
            
            })
          }
      });
        break
    default:
      throw new Error();
      }
}

const AppRouter = () => {

  const initialState = {
    affirmationIsLoading: false
  }
      
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return(
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path='/' component={MainApp} />
        <Route path='/admin'>
          <Admin submitAffirmation={(val) => dispatch({type: 'submitAffirmation', affirmationText: val.text, affirmationCategory: val.category})} />
        </Route>
      </Switch>
    </Router>
  )
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
