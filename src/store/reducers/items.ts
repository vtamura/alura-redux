import { createSlice } from '@reduxjs/toolkit'
import items from '../../data/items'

const itemsSlice = createSlice({
    name: 'items',
    initialState: items,
    reducers: {},
})

export default itemsSlice.reducer
