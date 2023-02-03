import { RiShoppingCart2Line, RiShoppingCart2Fill } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'
import { Search } from '../Search'

const IconProps = {
    size: 24,
    color: '#707070',
    style: {
        cursor: 'pointer',
    },
}

export const Navbar = () => {
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
                {location.pathname === '/cart' ? (
                    <RiShoppingCart2Fill {...IconProps} />
                ) : (
                    <RiShoppingCart2Line
                        {...IconProps}
                        onClick={() => navigate('/cart')}
                    />
                )}
            </div>
        </header>
    )
}
