import { getAffirmationCategories, submitNewAffirmation } from "./actions/adminActions"
import {loadAffirmations, getCategories, changeSameCategory, setNewCategory, toggleFullScreen, openModal, closeModal} from './actions/globalActions'

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
  closeModal: closeModal
}

export default actions