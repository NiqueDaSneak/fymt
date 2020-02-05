import React, {useReducer} from 'react';
// import {createGlobalStyle} from 'styled-components'
import Modal from '../components/Modals/Modal';
import BackgroundImageController from '../components/hoc/BackgroundImageController'
import Header from '../components/ui/Header'
import Carosel from '../components/ui/Carosel';

const MainApp = () => {
  const initialState = {
    modalOpen: false,
    modalType: null,
  }

  function reducer(state, action) {
    // var database = firebase.database();
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

export default MainApp;