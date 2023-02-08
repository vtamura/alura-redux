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
        updateItem: (state, { payload }: { payload: IItem }): IItem[] => {
            return state.map((item) => {
                if (item.id === payload.id) {
                    for (let [key, value] of Object.entries(payload)) {
                        if (value) {
                            item = { ...item, [key]: value }
                        }
                    }
                }
                return item
            })
        },
        deleteItem: (state, { payload }: { payload: string }): IItem[] => {
            return state.filter((item) => item.id !== payload)
        },
    },
})

export const { setFavorite, addItem, updateItem, deleteItem } =
    itemsSlice.actions
export default itemsSlice.reducer
