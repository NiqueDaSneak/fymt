import React, {useReducer} from 'react';
import {createGlobalStyle} from 'styled-components'
import Modal from './components/Modals/Modal';
import BackgroundImageController from './components/hoc/BackgroundImageController'
import Header from './components/ui/Header'
import Carosel from './components/ui/Carosel';

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

const App = () => {
  const initialState = {
    modalOpen: false,
    modalType: null,
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'openModal':
        return {modalOpen: true, modalType: action.modalType, modalData: action.modalData}
      case 'closeModal':
        return {modalOpen: false, modalData: action.modalData}
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <GlobalStyle/>
      <Modal
          close={() => dispatch({type: 'closeModal'})}
          open={state.modalOpen} 
          modalType={state.modalType}
          modalData={state.modalData} />
      <BackgroundImageController>
      <Header />
      <Carosel openModal={(modalType) => dispatch({type: 'openModal', modalType: modalType})} />
      </BackgroundImageController>
    </>
  );
}

export default App;