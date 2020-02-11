import React, { useContext } from 'react'
import styled from 'styled-components'
import actions from '../../store'
import {AffirmationContext} from '../hoc/Store'

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  justify-content: space-evenly;
  background-color: black;
  position: fixed;
  bottom: ${props => props.active ? '0' : '-70%;'};
  left: 0;
  transition: all .6s ease-in-out;
  z-index: 2;
  padding-top: 4%;
`

const Tag = styled.span`
  background-color: white;
  font-size: 12pt;
  padding: 3%;
  border-radius: 24px;
  white-space: nowrap;
  width: max-content;
  margin-bottom: 4%;
`

const SearchModal = props => {
  const [state, dispatch] = useContext(AffirmationContext)

  const Tags = props.categories ? props.categories.map(category => {
    return <Tag onClick={(event) => dispatch(actions.affirmations.setNewCategory(event.target.innerHTML))} key={category}>{category}</Tag>
  }) : []
  
  return(
    <Container active={props.active}>
      {Tags}
    </Container>
  )
}

export default SearchModal