import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: black;
  position: fixed;
  bottom: ${props => props.active ? '0' : '-50%;'};
  left: 0;
  transition: all .6s ease-in-out;
  z-index: 2;
  display: flex;
`

const Copy = styled.p`
  padding: 4%;
  font-size: 12pt;
  color: white;
`

const SettingsModal = props => {
  return(
    <Container active={props.active}>
      <Copy>Mauris vitae maximus elit, sit amet scelerisque enim. Integer ullamcorper nisi eget libero aliquam interdum. Morbi aliquet, dolor vel cursus placerat, enim ipsum suscipit urna, eu elementum eros ligula vel nisl. Fusce congue lectus lorem, non malesuada massa eleifend at. Vestibulum eleifend tempus lacus, nec faucibus nisi pretium eget. Nunc vulputate aliquet hendrerit. Phasellus quis neque sed velit lobortis bibendum. Donec elementum ultrices tellus, sit amet accumsan risus convallis non.</Copy>
    </Container>
  )
}

export default SettingsModal