import { RiShoppingCart2Line, RiShoppingCart2Fill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { Search } from '../Search'

const IconProps = {
    size: 20,
    color: '#707070',
}

export const Navbar = () => {
    const totalItems = useSelector((state: RootState) => state.cart.length)
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <header className="container sm:flex justify-between mx-auto items-center p-6">
            <div
                className="mb-6 sm:mb-0 cursor-pointer"
                onClick={() => navigate('/')}
            >
                <h1 className="text-2xl text-gray-700">
                    <span className="font-semibold">Trato</span>
                    <span className="italic">Tech</span>
                </h1>
            </div>
            <div className="flex items-center gap-4">
                <Search />
                <div className="relative flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full cursor-pointer">
                    {location.pathname === '/cart' ? (
                        <RiShoppingCart2Fill {...IconProps} />
                    ) : (
                        <RiShoppingCart2Line
                            {...IconProps}
                            onClick={() => navigate('/cart')}
                        />
                    )}
                    {totalItems > 0 && (
                        <div className="absolute top-0 -right-2 flex justify-center items-center text-white bg-red-500 w-4 h-4 rounded-full text-[11px] select-none">
                            {totalItems}
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
