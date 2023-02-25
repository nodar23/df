export const initialState = {
    token: '',
    userID: '',
    cart: [],
    filter: {
      search: '',
    },
  };
  
  export function getInitialState() {
    const dataFromLS = localStorage.getItem('REDUX_LS_KEY');
    return dataFromLS ? JSON.parse(dataFromLS) : initialState;
  }
  