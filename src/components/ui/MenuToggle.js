import React from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'

const Container = styled.div`
  background-color: white;
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  height: 8vh;
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

const Chevron = styled.img.attrs({
  src: Images.chevron
})`
  width: 8%;
  transform: ${props => props.left ? 'rotate(180deg)' : null};
`


const MenuToggle = () => (
    <Container>
    <Chevron left />
    <Dots>
      <span></span>
      <span></span>
      <span></span>
    </Dots>
    <Chevron />
  </Container>
)

export default MenuToggle