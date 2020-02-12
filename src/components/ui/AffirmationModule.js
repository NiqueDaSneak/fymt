import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'
import actions from '../../store/'
import {AffirmationContext, ModalContext} from '../hoc/Store'

const Container = styled.div`
  background-color: white;
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
  width: 10vw;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 5vh;
`

const AffirmationModule = (props) => {
  const [affirmationState, affirmationDispatch] = useContext(AffirmationContext)
  const [modalState, modalDispatch] = useContext(ModalContext)

  useEffect(() => {
    affirmationDispatch(actions.affirmations.loadAffirmations({random: true}))
  }, [affirmationDispatch])
  
  return(
    <Container fullScreen={affirmationState.fullScreen}>
      <ButtonContainer>
        <Icon 
          onClick={() => modalDispatch(actions.modal.open('INFO_MODAL'))}
          icon='info'/>
        <Icon 
          onClick={() => affirmationDispatch(actions.affirmations.changeSameCategory())}
          icon='change'/>
        <Icon 
          onClick={() => modalDispatch(actions.modal.open('SEARCH_MODAL', affirmationState.allCategories))}
          icon='search'/>
      </ButtonContainer>
      <ButtonContainer>
        <Icon 
          onClick={() => modalDispatch(actions.modal.open('ALERTS_MODAL'))}
          icon='alert'/>
        <Icon 
          onClick={() => modalDispatch(actions.modal.open('SETTINGS_MODAL'))}
          icon='settings'/>
        <Icon 
          onClick={() => modalDispatch(actions.modal.open('SETTINGS_MODAL'))}
          icon='profile'/>
      </ButtonContainer>
    </Container>
  )
}

export default AffirmationModule