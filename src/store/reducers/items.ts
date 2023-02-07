import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import IItem from '../../@types/item'
import items from '../../mocks/items'

interface IPayloadItem {
    payload: Omit<IItem, 'id' | 'favorite'>
}

const itemsSlice = createSlice({
    name: 'items',
    initialState: items,
    reducers: {
        setFavorite: (state, { payload }: { payload: string }) =>
            state.map((item) =>
                item.id === payload
                    ? { ...item, favorite: !item.favorite }
                    : item
            ),
        addItem: (state, { payload }: IPayloadItem): IItem[] => [
            ...state,
            { ...payload, id: uuid(), favorite: false },
        ],
    },
})

export const { setFavorite, addItem } = itemsSlice.actions
export default itemsSlice.reducer
