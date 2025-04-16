import { configureStore } from '@reduxjs/toolkit'

import projectReducer from './reducers/project'

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
})
