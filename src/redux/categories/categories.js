const CHECK = 'bookstore/categories/CHECK';
const initialState = [];

export const checkStatus = () => ({
  type: CHECK,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
	case CHECK:
    return 'Under construction';
	default:
    return state;
  }
};

export default reducer;
