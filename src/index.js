import React, {useReducer} from 'react'
import ReactDOM from 'react-dom'
import styled, {createGlobalStyle} from 'styled-components'
import MainApp from './views/MainApp'
import Admin from './views/Admin'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Store from './components/hoc/Store'

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

const AppRouter = () => {  
  return(
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path='/'>
          <Store>
            <MainApp/>
          </Store>
        </Route>
        <Route path='/admin' component={Admin}>
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
