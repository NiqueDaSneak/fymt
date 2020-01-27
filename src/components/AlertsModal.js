import React from 'react'
import styled from 'styled-components'
import Images from '../assets/imgs'
import Switch from './Switch'

const Container = styled.div`
  height: 40%;
  width: 100%;
  background-color: red;
  position: fixed;
  bottom: ${props => props.active ? '0' : '-40%;'};
  left: 0;
  transition: all 1s ease-in-out;
  z-index: 2;
  border-radius: 30% 30% 0 0;
`

const HeaderIcon = styled.img.attrs(props => ({
  src: Images.alert
}))`
  width: 10vw;
`
const ToggleContainer = styled.div``

const SingleToggle = styled.div``

const AlertsModal = props => {
  return(
    <Container active={props.active}>
      <HeaderIcon/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum mi in diam ultricies pretium. Praesent sed dictum justo. In ac ex nec sapien eleifend vestibulum non ut tellus.</p>
      <ToggleContainer>
        <SingleToggle>
          <p>Toggle Heading</p>
          <Switch />
        </SingleToggle>
        <SingleToggle>
          <p>Toggle Heading</p>
          <Switch />
        </SingleToggle>
      </ToggleContainer>
    </Container>
  )
}

export default AlertsModal