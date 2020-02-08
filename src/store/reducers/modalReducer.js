const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {modalOpen: true, modalType: action.modalType}
    case 'CLOSE_MODAL':
      return {modalOpen: false}
    default:
      throw new Error();
  }
}

export default reducer