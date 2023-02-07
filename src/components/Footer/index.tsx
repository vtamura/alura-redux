import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa'

const iconProps = {
    fontSize: '1.5rem',
    color: '#2e2e2e',
}

export const Footer = () => {
    return (
        <div className="container mt-auto mx-auto h-[100px] flex flex-col sm:flex-row sm:justify-between justify-center items-center shrink-0">
            <div className="flex w-full sm:w-auto items-center gap-6 justify-around sm:justify-start mb-4 sm:mb-0">
                <FaInstagram className="cursor-pointer" {...iconProps} />
                <FaGithub className="cursor-pointer" {...iconProps} />
                <FaFacebook className="cursor-pointer" {...iconProps} />
            </div>
            <div>
                <h3 className="">Desenvolvido por Vinícius Tamura</h3>
            </div>
        </div>
    )
}
