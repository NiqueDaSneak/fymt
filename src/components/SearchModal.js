import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  flex-flow: wrap;
  width: 100%;
  justify-content: space-evenly;
  background-color: red;
  position: fixed;
  bottom: ${props => props.active ? '0' : '-70%;'};
  left: 0;
  transition: all .6s ease-in-out;
  z-index: 2;
  /* justify-content: center; */
  /* height: 20%; */
  /* justify-content: space-between; */
  padding-top: 4%;
  /* padding-bottom: 4%; */
  /* border-radius: 30% 30% 0 0; */
`

const SearchBar = styled.input.attrs({
  type: 'search',
  placeholder: 'Search goes here...'
})`
  background-color: white;
  border: none;
  font-size: 16pt;
  padding: 3%;
  width: 90%;
  border-radius: 14px;
`

const TagContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  /* &:last-child {
    content: "";
    display: block;
    position: absolute;
    right: -2rem;
    width: 2rem;
    height: 1px;
    margin-right: 2%;
  } */

`

const Tag = styled.span`
  background-color: yellow;
  font-size: 12pt;
  /* margin-right: 4%; */
  padding: 3%;
  border-radius: 24px;
  white-space: nowrap;
  width: max-content;
  margin-bottom: 4%;
    /* margin: 2%; */
  /* margin-right: 2%; */
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