import { useDispatch } from 'react-redux'
import ICartItem from '../../../@types/cartItem'
import IItem from '../../../@types/item'
import { changeQuantity } from '../../../store/reducers/cart'
import currencyConverter from '../../../utils/currencyConverter'

export const Item = ({
    title,
    description,
    price,
    src,
    id,
    quantity,
}: IItem & ICartItem) => {
    const dispatch = useDispatch()
    const handleClick = (qtd: number) =>
        dispatch(changeQuantity({ id: id, quantity: qtd }))

    return (
        <div key={id} className="flex mb-8 shadow-md rounded-lg">
            <img src={src} alt="" />
            <div className="p-4">
                <h3 className="mb-4 font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <div className="flex flex-col justify-between">
                <div className="py-2 px-4 bg-gray-400">
                    {currencyConverter(price)}
                </div>
                <div className="flex justify-around py-2">
                    <button
                        className="flex items-center justify-center rounded-full bg-blue-500 text-white w-6 h-6 text-lg"
                        onClick={() => {
                            if (quantity >= 1) {
                                handleClick(-1)
                            }
                        }}
                    >
                        -
                    </button>
                    <span>{String(quantity).padStart(2, '0')}</span>
                    <button
                        className="flex items-center justify-center rounded-full bg-blue-500 text-white w-6 h-6 text-lg"
                        onClick={() => {
                            handleClick(1)
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}
