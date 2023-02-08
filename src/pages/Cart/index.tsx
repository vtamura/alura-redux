import { useDispatch, useSelector } from 'react-redux'
import { Hero } from '../../components/Hero'
import { RootState } from '../../store'
import { resetCart } from '../../store/reducers/cart'
import currencyConverter from '../../utils/currencyConverter'
import { Item } from './Item'

export const Cart = () => {
    const dispatch = useDispatch()
    const { items, total } = useSelector((state: RootState) => {
        let total: number = 0
        const regex = new RegExp(state.search, 'i')
        const cart = state.cart
            .map((item) => {
                const itemInCart = state.items.find((i) => i.id === item.id)

                if (itemInCart) {
                    total += itemInCart.price * item.quantity

                    if (itemInCart.title.match(regex)) {
                        return {
                            ...item,
                            ...itemInCart,
                        }
                    }
                }
                return null
            })
            .filter((item) => item !== null)

        return {
            items: cart,
            total,
        }
    })

    const handleClick = () => dispatch(resetCart())

    return (
        <>
            <Hero
                title="Carrinho de compras"
                description="Confira os produtos adicionados no carrinho"
            />
            <div className="container mx-auto mt-8">
                {items.map((item) => (
                    <Item
                        key={item!.id}
                        category={item!.category}
                        description={item!.description}
                        favorite={item!.favorite}
                        id={item!.id}
                        price={item!.price}
                        src={item!.src}
                        title={item!.title}
                        quantity={item!.quantity}
                    />
                ))}
                <div className="flex flex-col items-end">
                    <p className="text-md text-gray-700 mb-4">
                        <span className="font-bold">Total:</span>{' '}
                        {currencyConverter(total)}
                    </p>
                    <button
                        type="button"
                        className="hover:bg-black hover:text-white text-black py-2 px-4 rounded-full border-[1px] border-black transition ease-in"
                        onClick={handleClick}
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </>
    )
}
