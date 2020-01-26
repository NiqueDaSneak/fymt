import React from 'react'
import styled from 'styled-components'

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

const SettingsModal = props => {
  return(
      <Container active={props.active}></Container>
  )
}

export default SettingsModal