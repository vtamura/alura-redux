import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './reducers/categories'
import itemsReducer from './reducers/items'
import cartsReducer from './reducers/cart'
import searchReducer from './reducers/search'

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        items: itemsReducer,
        cart: cartsReducer,
        search: searchReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store
