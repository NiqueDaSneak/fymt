import { getAffirmationCategories, submitNewAffirmation } from "./actions/adminActions";

const actions = {
  admin: {
    getAffirmationCategories: getAffirmationCategories,
    submitNewAffirmation: submitNewAffirmation
  }
}

export default actions