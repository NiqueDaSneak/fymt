import React, { useState } from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'
import AffirmationModule from './AffirmationModule'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff6b;
  backdrop-filter: blur(18px);
`

const Dots = styled.div`
  width: 24vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    width: 4vw;
    height: 4vw;
    background-color: grey;
    display: inline-block;
    border-radius: 10px;
  }
`

const ModalNav = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  padding-top: 4%;
  height: 4vh;
  padding-bottom: 2%;
`

const Chevron = styled.img.attrs({
  src: Images.chevron
})`
  width: 10vw;
  transform: ${props => props.left ? 'rotate(180deg)' : null};
`

const Carosel = props => {
  const [index, setIndex] = useState(0)

  return(
    <Container>
      <ModalNav>
        <Chevron left />
        <Dots>
          <span></span>
          <span></span>
          <span></span>
        </Dots>
        <Chevron />
      </ModalNav>
      <AffirmationModule openModal={(val) => props.openModal(val)} />
      {/* <AffirmationModule>
        <CategoryTitle>Fitness</CategoryTitle>
        <AffirmationText>This is the affirmation statement; more text for the longest possbile version.</AffirmationText>
          <ButtonContainer>
            <Icon 
              onClick={() => props.openModal('INFO_MODAL')}
              icon='info'/>
            <Icon 
              onClick={() => props.openModal('SETTINGS_MODAL')}
              icon='change'/>
            <Icon 
              onClick={() => props.openModal('SEARCH_MODAL')}
              icon='search'/>
          </ButtonContainer>
          <ButtonContainer>
            <Icon 
              onClick={() => props.openModal('ALERTS_MODAL')}
              icon='alert'/>
            <Icon 
              onClick={() => props.openModal('SETTINGS_MODAL')}
              icon='settings'/>
            <Icon 
              onClick={() => props.openModal('SETTINGS_MODAL')}
              icon='profile'/>
          </ButtonContainer>
      </AffirmationModule> */}
    </Container>
  )
}

export default Carosel

