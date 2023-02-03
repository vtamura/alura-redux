import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa'

const iconProps = {
    fontSize: '1.5rem',
    color: '#2e2e2e',
}

export const Footer = () => {
    return (
        <div className="container mx-auto h-[150px] flex justify-between items-center">
            <div className="flex items-center gap-6">
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
