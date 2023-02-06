import { createSlice } from '@reduxjs/toolkit'

const initialState: string = ''

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, { payload }) => payload,
        resetSearch: () => '',
    },
})

export const { setSearch, resetSearch } = searchSlice.actions
export default searchSlice.reducer
