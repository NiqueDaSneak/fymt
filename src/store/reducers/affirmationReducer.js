import actions from ".."

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_AFF_START':
      return {...state, isAffirmationLoading: true}
    case 'LOAD_AFF_END':
      return {...state, isAffirmationLoading: false}
    case 'SET_AFF': 
      return {...state, currentAffirmation: {category: action.category, text: action.text}}
    case 'SET_ALL_AFFS':
      return {...state, allAffirmations: action.affirmations}
    case 'SET_AFF_CAT_START':
      return {...state, isCategoryLoading: action.isCategoryLoading}
    case 'SET_AFF_CAT_END':
      return {...state, isCategoryLoading: action.isCategoryLoading}
    case 'SET_AFF_CAT':
      return {...state, allCategories: action.affirmationCategories}
    case 'CHANGE_AFF_SAME_CAT':
      return {...state, currentAffirmation: action.payload}
      default:
      throw new Error();
  }
}
  
export default reducer