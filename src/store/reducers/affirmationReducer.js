
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_AFFIRMATIONS_START':
      return {...state, isAffirmationLoading: true}
    case 'LOAD_AFFIRMATIONS_END':
      return {...state, isAffirmationLoading: false}
    case 'SET_AFFIRMATION': 
      return {...state, currentAffirmation: {category: action.category, text: action.text}}
    default:
      throw new Error();
  }
}
  
export default reducer