const initialState = {
  currentAffirmation: {
    category: '',
    text: ''
  },
  allAffirmations: [],
  allCategories: [],
  isAffirmationLoading: false,
  isCategoryLoading: false,
  fullScreen: false,
  modalOpen: false,
  modalType: null,
  modalData: [],
  soundActive: false,
  // soundIsLoading: false,
  whichMp3Active: 'ocean',
}

export default initialState