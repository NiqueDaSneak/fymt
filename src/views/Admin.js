import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {getAffirmationCategories} from '../store/actionCreators'
import { useThunkReducer } from 'react-hook-thunk-reducer';
import adminReducer from '../store/reducers/adminReducer'

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




// const Admin = ({getAffirmationCategories, affirmationCategories, submitAffirmation}) => {
const Admin = (props) => {
  const initialState = {
    affirmationIsLoading: false,
    affirmationCategories: [],
    isAffirmationCategoryLoading: false
  }
  // const [state, dispatch] = useReducer(reducer, initialState)
  
  const [state, dispatch] = useThunkReducer(adminReducer, initialState)

  const [newAffirmation, setNewAffirmationText] = useState('')
  const [category, setCategoryText] = useState('')
  // const [categoryOptions, setCategoryOptions] = useState([])
  // console.log('affirmationCategories', affirmationCategories)
  useEffect(() => {
    console.log('in useEffect')
    dispatch(getAffirmationCategories())
  }, [dispatch])

  const formSubmit = () => {
    // submitAffirmation({text: newAffirmation, category: category})
    // getAffirmationCategories()
    // setNewAffirmationText('')
    // setCategoryText('')
  }

  return(
    <Container>
    {console.log(state)}
      <p>Admin</p>
      <div>
        <p>Affirmations</p>
        <p>Input Text:</p>
        <textarea value={newAffirmation} onChange={(e) => setNewAffirmationText(e.target.value)}></textarea>
        <p>Tags</p>
        <div></div>
        <Select onChange={(e) => setCategoryText(e.target.value)}>
          <option>-Make Selection-</option>
          {state.affirmationCategories.map(option => {
            return <option key={option}>{option}</option>
          })}
        </Select>        
        <input value={category} type='text' onChange={(e) => setCategoryText(e.target.value)}/>
        <SubmitButton onClick={() => formSubmit()}>Submit</SubmitButton>
      </div>
    </Container>
  )
}

export default Admin