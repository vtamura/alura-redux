import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Categories } from '../pages/Categories'
import { Cart } from '../pages/Cart'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Registry } from '../pages/Registry'
import { Layout } from './Layout'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<Home />} path="/" index />
                    <Route
                        element={<Categories />}
                        path="/categories/:category"
                    />
                    <Route element={<Cart />} path="/cart" />
                    <Route element={<Registry />} path="/registry/:id?" />
                </Route>
                <Route element={<NotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    )
}
