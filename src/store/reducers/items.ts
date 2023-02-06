import { createSlice } from '@reduxjs/toolkit'
import items from '../../mocks/items'

const itemsSlice = createSlice({
    name: 'items',
    initialState: items,
    reducers: {
        setFavorite: (state, { payload }) =>
            state.map((item) =>
                item.id === payload
                    ? { ...item, favorite: !item.favorite }
                    : item
            ),
    },
})

export const { setFavorite } = itemsSlice.actions
export default itemsSlice.reducer
