import { FaCartPlus } from 'react-icons/fa'
import { RiHeart2Fill, RiHeartLine } from 'react-icons/ri'
import items from '../../../mocks/items'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorite } from '../../../store/reducers/items'
import { addToCart } from '../../../store/reducers/cart'
import { RootState } from '../../../store'
import currencyConverter from '../../../utils/currencyConverter'

type ItemProps = typeof items[0]

const iconProps = (color: string) => ({
    style: {
        fontSize: '1.4rem',
        color,
    },
})

export const Item = ({
    id,
    src,
    title,
    description,
    price,
    favorite,
}: ItemProps) => {
    const dispatch = useDispatch()
    const handleFavorite = () => dispatch(setFavorite(id))
    const handleCart = () => dispatch(addToCart(id))
    const isInCart = useSelector<RootState>((state) =>
        state.cart.some((item) => item.id === id)
    )

    return (
        <div
            className="flex flex-col mb-4 sm:mb-0 sm:shadow-md sm:rounded-md overflow-hidden"
            key={id}
        >
            <div className="w-full object-cover">
                <img className="w-full" src={src} alt="" />
            </div>
            <div className="px-4 mb-4">
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-xs text-gray-500 text-justify">
                    {description}
                </p>
            </div>
            <div className="flex items-center mt-auto">
                <span className="flex-1 p-3 text-center font-semibold bg-gray-300">
                    {currencyConverter(price)}
                </span>
                <div className="flex items-center h-full">
                    <div
                        className="h-full grid items-center px-3 hover:bg-gray-100 transition ease-in cursor-pointer"
                        onClick={(e) => handleFavorite()}
                    >
                        {favorite ? (
                            <RiHeart2Fill {...iconProps('#ff4444')} />
                        ) : (
                            <RiHeartLine {...iconProps('#707070')} />
                        )}
                    </div>
                    <div
                        className="h-full grid items-center px-3 hover:bg-gray-100 transition ease-in cursor-pointer"
                        onClick={(e) => handleCart()}
                    >
                        <FaCartPlus
                            {...iconProps(isInCart ? '#32c256' : '#707070')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}