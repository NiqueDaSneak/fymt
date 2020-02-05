import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  font-size: 16pt;
`

const SubmitButton = styled.button`
  color: white;
  background-color: red;
`

const Select = styled.select`
  font-size: 16pt;
  background-color: white;
`

const Admin = props => {
  const [affirmation, setAffirmationText] = useState('')
  const [category, setCategoryText] = useState('')

  // useEffect(() => {
  // })
  console.log('category: ', category)
  return(
    <Container>
      <p>Admin</p>
      <div>
        <p>Affirmations</p>
        <p>Input Text:</p>
        <textarea onChange={(e) => setAffirmationText(e.target.value)}></textarea>
        <p>Tags</p>
        <div></div>
        <Select onChange={(e) => setCategoryText(e.target.value)}>
          <option>-Make Selection-</option>
          <option>Peace</option>
          <option>Fear</option>
          <option>Joy</option>
        </Select>        
        <input type='text' onChange={(e) => setCategoryText(e.target.value)}/>
        <SubmitButton onClick={() => props.submitAffirmation({text: affirmation, category: category})}>Submit</SubmitButton>
      </div>
    </Container>
  )
}

export default Admin