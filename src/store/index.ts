import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './reducers/categories'
import itemsReducer from './reducers/items'

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        items: itemsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store
