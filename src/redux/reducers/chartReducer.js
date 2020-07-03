const chartReducer = (state = [], action) => {
  console.log('can I see this?')
  switch (action.type) {
    case 'SET_CHART':
      console.log('action.payload in reducer', action.payload);
      return action.payload;
    case 'UNSET_CHART':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default chartReducer;
