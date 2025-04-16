import { createSlice } from '@reduxjs/toolkit'

// 初始状态
const initialState = {
  title: '项目管理',
}

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {},
})

export const {} = common.actions
export default common.reducer
