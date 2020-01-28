import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  background-color: red;
  position: fixed;
  bottom: ${props => props.active ? '0' : '-40%;'};
  left: 0;
  transition: all 1s ease-in-out;
  z-index: 2;
  height: 20%;
  justify-content: space-around;
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
  font-size: 16pt;
  padding: 3%;
  border-radius: 24px;
  white-space: nowrap;
  width: max-content;
  margin-left: 2%;
  margin-right: 2%;
`

const SearchModal = props => {
  return(
    <Container active={props.active}>
      <TagContainer>
        <Tag>Motivation</Tag>
        <Tag>Help Me</Tag>
        <Tag>Peace</Tag>
        <Tag>Help Me</Tag>
        <Tag>Courage</Tag>
      </TagContainer>
      <SearchBar />
    </Container>
  )
}

export default SearchModal