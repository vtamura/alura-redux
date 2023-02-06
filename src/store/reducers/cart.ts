import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import ICartItem from '../../@types/cartItem'

const initialState: ICartItem[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (
            state: ICartItem[],
            { payload }: { payload: string }
        ): ICartItem[] => {
            const hasItem = state.some((item) => item.id === payload)
            if (!hasItem) {
                const newState = [...state, { id: payload, quantity: 1 }]
                return newState
            }
            return state.filter((item) => item.id !== payload)
        },
        changeQuantity: (
            state: ICartItem[],
            { payload }: { payload: { id: string; quantity: number } }
        ) => {
            state = state.map((item) => {
                if (item.id === payload.id) item.quantity += payload.quantity

                return item
            })
        },
        resetCart: () => [],
    },
})

export const { addToCart, changeQuantity, resetCart } = cartSlice.actions
export default cartSlice.reducer
