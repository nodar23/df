import { LS_KEY } from "./ls_key";


export const initState = {
  user: {
    token: '',
    name: '',
    email: '',
    group: '',
    avatar: '',
    about: '',
  },
  filter: {
    search: '',
  }
}
export const getInitState = () => {
  const dataFromLS = window.localStorage.getItem(LS_KEY)
  return dataFromLS ? JSON.parse(dataFromLS) : initState
}

