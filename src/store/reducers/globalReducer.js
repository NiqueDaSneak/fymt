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
    case 'TOGGLE_FULL_SCREEN':
      return {...state, fullScreen: !state.fullScreen}
    case 'OPEN_MODAL':
      return {...state, modalOpen: true, modalType: action.modalType, modalData: action.modalData}
    case 'CLOSE_MODAL':
      return {...state, modalOpen: false, modalType: null}  
    case 'SET_WHICH_MP3':
      return {...state, whichMp3Active: action.whichMp3}
      case 'test':
      console.log('test in reducer')
      return {...state}
    default:
    throw new Error();
  }
}
  
export default reducer