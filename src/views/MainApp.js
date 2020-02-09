import React from 'react';
import { useThunkReducer } from 'react-hook-thunk-reducer'
import modalReducer from '../store/reducers/modalReducer'
import actions from '../store/'
import Modal from '../components/Modals/Modal';
import BackgroundImageController from '../components/hoc/BackgroundImageController'
import Header from '../components/ui/Header'
import Carosel from '../components/ui/Carosel';

const MainApp = () => {
  const initialState = {
    modalOpen: false,
    modalType: null,
    modalData: []
  }

  const [state, dispatch] = useThunkReducer(modalReducer, initialState);

  return (
    <>
      <Modal
        close={() => dispatch(actions.modal.close())}
        open={state.modalOpen} 
        modalType={state.modalType}
        modalData={state.modalData} />
      <BackgroundImageController>
      <Header />
      <Carosel openModal={(modalType, modalData) => dispatch(actions.modal.open(modalType, modalData))} />
      </BackgroundImageController>
    </>
  );
}

export default MainApp;