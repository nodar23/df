import { LS_KEY } from "./constants";

export const initState = {
  user: {
    token: '',
    name: '',
    email: '',
    group: '',
    avatar: '',
    about: '',
    id: '',
  },
  filter: {
    search: '',
  },
  cart: {},
  favorite: [],
}
export const getInitState = () => {
  const dataFromLS = window.localStorage.getItem(LS_KEY)
  return dataFromLS ? JSON.parse(dataFromLS) : initState
}

