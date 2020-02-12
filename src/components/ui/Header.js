import React, {useContext} from 'react'
import styled from 'styled-components'
import { AffirmationContext } from '../hoc/Store'

const Container = styled.div`
  height: ${props => props.visible ? '10%' : '0%'};
  width: 100%;
  background-color: white;
  transition: height 1s ease-in-out;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.75);
`

const Header = props => {
  const [affirmationState, affirmationDispatch] = useContext(AffirmationContext)

  return(
    <Container visible={!affirmationState.fullScreen}></Container>
  )
}

export default Header