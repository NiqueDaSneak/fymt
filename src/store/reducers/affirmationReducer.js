
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_AFFIRMATLOAD_AFF_STARTIONS_START':
      return {...state, isAffirmationLoading: true}
    case 'LOAD_AFF_END':
      return {...state, isAffirmationLoading: false}
    case 'SET_AFF': 
      return {...state, currentAffirmation: {category: action.category, text: action.text}}
    default:
      throw new Error();
  }
}
  
export default reducer