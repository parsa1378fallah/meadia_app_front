import { createSlice } from '@reduxjs/toolkit'
export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: false,
  },
  reducers: {
    access: (state) => {
      state.value = true
    },
    denied: (state) => {
      state.value = false
    },
  },
})

export const { access , denied } = loginSlice.actions


export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}


export const isUserLogin = (state) => state.login.value
export const isUserLoginStore = (state) => state.login.value
export default loginSlice.reducer