import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'
import actions from '../../store/'
import {GlobalContext, ModalContext} from '../hoc/Store'

const Container = styled.div`
  /* background-color: white; */
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  align-items: center; 
  opacity: ${props => props.fullScreen ? '0' : '1'};
  height: ${props => props.fullScreen ? '0%' : '24%'};
  transition: all 1s ease-in-out;
`

const Icon = styled.img.attrs(props => ({
  src: Images[props.icon]
}))`
  width: 14%;
  height: 80%;
  /* background-color: red; */
  padding: 3%;
  /* border-radius: 16px;
  background: #008c00;
  box-shadow: 5px 5px 11px #005f00, -5px -5px 11px #00b900; */
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 30%;
  border-radius: 50px;
`

const AffirmationModule = (props) => {
  const [state, dispatch] = useContext(GlobalContext)

  useEffect(() => {
    dispatch(actions.loadAffirmations({random: true}))
  }, [dispatch])
  
  return(
    <Container fullScreen={state.fullScreen}>
      <ButtonContainer>
        <Icon 
          onClick={() => dispatch(actions.openModal('INFO_MODAL'))}
          icon='info'/>
        <Icon 
          onClick={() => dispatch(actions.changeSameCategory())}
          icon='change'/>
        <Icon 
          onClick={() => dispatch(actions.openModal('SEARCH_MODAL', state.allCategories))}
          icon='search'/>
      </ButtonContainer>
      <ButtonContainer>
        <Icon 
          onClick={() => dispatch(actions.openModal('ALERTS_MODAL'))}
          icon='alert'/>
        <Icon 
          onClick={() => dispatch(actions.openModal('SETTINGS_MODAL'))}
          icon='settings'/>
        <Icon 
          onClick={() => dispatch(actions.openModal('SETTINGS_MODAL'))}
          icon='profile'/>
      </ButtonContainer>
    </Container>
  )
}

export default AffirmationModule