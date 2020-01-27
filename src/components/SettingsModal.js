import React from 'react'
import styled from 'styled-components'
import Images from '../assets/imgs'
import SoundToggle from './SoundToggle'
import Switch from './Switch'

const Container = styled.div`
  height: 40%;
  width: 100%;
  background-color: red;
  position: fixed;
  bottom: ${props => props.active ? '0' : '-50%;'};
  left: 0;
  transition: all .6s ease-in-out;
  z-index: 2;
  border-radius: 30% 30% 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 10%;

  
`

const HeaderIcon = styled.img.attrs(props => ({
  src: Images.settings
}))`
  width: 10vw;
`

const SettingsModal = props => {
  return(
    <Container active={props.active}>
      <HeaderIcon/>
      <p>Toggle Heading</p>
      <Switch />
      <p>Sound Change Heading</p>
      <SoundToggle />
    </Container>
  )
}

export default SettingsModal