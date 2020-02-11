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
      <AffirmationModule openModal={(modalType, modalData) => props.openModal(modalType, modalData)} />
    </Container>
  )
}

export default Carosel

