import React, {useContext} from 'react'
import styled from 'styled-components'
import { AffirmationContext } from '../hoc/Store'

const Container = styled.div`
  height: ${props => props.visible ? '10%' : '0%'};
  width: 20%;
  background-color: white;
  transition: height 1s ease-in-out;
  border-radius: 16px;
  background: #606564;
  box-shadow: 5px 5px 11px #414544, -5px -5px 11px #7f8584;
`

const Header = props => {
  const [affirmationState, affirmationDispatch] = useContext(AffirmationContext)

  return(
    <Container visible={!affirmationState.fullScreen}></Container>
  )
}

export default Header