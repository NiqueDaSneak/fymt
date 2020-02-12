import { getAffirmationCategories, submitNewAffirmation } from "./actions/adminActions";
import {openModal, closeModal} from './actions/modalActions'
import {loadAffirmations, getCategories, changeSameCategory, setNewCategory, toggleFullScreen} from './actions/affirmationActions'

const actions = {
  admin: {
    getAffirmationCategories: getAffirmationCategories,
    submitNewAffirmation: submitNewAffirmation
  },
  modal: {
    open: openModal,
    close: closeModal
  },
  affirmations: {
    loadAffirmations: loadAffirmations,
    getCategories: getCategories,
    changeSameCategory: changeSameCategory,
    setNewCategory: setNewCategory,
    toggleFullScreen: toggleFullScreen
  }
}

export default actions