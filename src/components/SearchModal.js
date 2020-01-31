import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  justify-content: space-evenly;
  background-color: red;
  position: fixed;
  bottom: ${props => props.active ? '0' : '-70%;'};
  left: 0;
  transition: all .6s ease-in-out;
  z-index: 2;
  padding-top: 4%;
`

const Tag = styled.span`
  background-color: yellow;
  font-size: 12pt;
  padding: 3%;
  border-radius: 24px;
  white-space: nowrap;
  width: max-content;
  margin-bottom: 4%;
`

const SearchModal = props => {
  return(
    <Container active={props.active}>
      <Tag>Motivation</Tag>
      <Tag>Peace</Tag>
      <Tag>Help Me</Tag>
      <Tag>Courage</Tag>
      <Tag>Help Me</Tag>
      <Tag>Help Me</Tag>
      <Tag>Help Me</Tag>
      <Tag>Peace</Tag>
      <Tag>Motivation</Tag>
      <Tag>Courage</Tag>
      <Tag>Motivation</Tag>
      <Tag>Help Me</Tag>
      <Tag>Courage</Tag>
      <Tag>Courage</Tag>
      <Tag>Help Me</Tag>
      <Tag>Help Me</Tag>
      <Tag>Courage</Tag>
      <Tag>Peace</Tag>
      <Tag>Help Me</Tag>
      <Tag>Help Me</Tag>
    </Container>
  )
}

export default SearchModal