import { getAffirmationCategories, submitNewAffirmation } from "./actions/adminActions"
import {loadAffirmations, getCategories, changeSameCategory, setNewCategory, toggleFullScreen, openModal, closeModal, setWhichMp3, toggleSoundActive} from './actions/globalActions'

const actions = {
  admin: {
    getAffirmationCategories: getAffirmationCategories,
    submitNewAffirmation: submitNewAffirmation
  },
  loadAffirmations: loadAffirmations,
  getCategories: getCategories,
  changeSameCategory: changeSameCategory,
  setNewCategory: setNewCategory,
  toggleFullScreen: toggleFullScreen,
  openModal: openModal,
  closeModal: closeModal,
  setWhichMp3: setWhichMp3,
  toggleSoundActive: toggleSoundActive
}

export default actions