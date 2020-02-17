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
  whichMp3Active: '',
}

export default initialState