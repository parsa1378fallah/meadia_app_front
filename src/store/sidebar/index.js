import { createSlice } from '@reduxjs/toolkit'
export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    value: false,
  },
  reducers: {
    open: (state) => {
      state.value = true
    },
    close: (state) => {
      state.value = false
    },
  },
})

export const { open , close } = sidebarSlice.actions






export const isSidebarOpenStore = (state) => state.sidebar.value
export default sidebarSlice.reducer