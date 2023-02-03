import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className="grid items-center h-screen w-full">
            <div className="text-center">
                <h1 className="mb-6 text-4xl">404 - NotFound</h1>
                <Link to="/">Voltar à página inicial</Link>
            </div>
        </div>
    )
}
