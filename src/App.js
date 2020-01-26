import React, {useReducer} from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import FooterNav from './components/FooterNav'
import Modal from './components/Modal';

const GlobalStyle = createGlobalStyle`
  * { padding: 0; margin: 0; }
  html { height: 100%; width: 100%; background-color: green;}
`

const Window = styled.div`
  height: 100%;
  padding-top: 30%;
  width: 100%;
`

const AffirmationText = styled.p`
  width: 90%;
  margin-left: 5%;
  text-align: center;
  font-size: 16pt;
`
const App = () => {

const initialState = {
  modalOpen: false,
  modalType: null,
  cart: {
    active: false
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'openModal':
      console.log('modalType', action.modalType)
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
      <Window>
        <AffirmationText>This is the affirmation statement; more text for the longest possbile version.</AffirmationText>
        <FooterNav openModal={(type) => dispatch({type: 'openModal', modalType: type})} />
      </Window>
      {/* </GlobalStyle> */}
    </>
  );
}

export default App;
