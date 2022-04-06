const initialState = {
  count: 0
};

const counterStore = {
  state: initialState,
  reducers: {
    updateCount: (state, payload) => ({ ...state, count: state.count + payload })
  }
};

export default counterStore;
