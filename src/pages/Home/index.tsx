import { Hero } from '../../components/Hero'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import heroImage from '../../assets/images/background.jpg'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    const categories = useSelector((state: RootState) => state.categories)

    return (
        <>
            <Hero
                title="Soluções Tecnológicas"
                description="Compre diversos tipos de produtos no melhor site do Brasil"
                image={heroImage}
            />
            <div className="md:container mx-auto">
                <div className="px-4 md:px-0 my-10">
                    <h2 className="text-xl font-semibold">Categorias</h2>
                </div>
                <div className="flex sm:flex-row flex-col justify-between items-center gap-6 ">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex-1 md:max-w-[300px] w-full  overflow-hidden md:rounded-md cursor-pointer"
                            onClick={() =>
                                navigate(`/categories/${category.path}`)
                            }
                        >
                            <div className="relative overflow-hidden">
                                <motion.img
                                    whileHover={{
                                        scale: 1.07,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="h-[400px] w-full object-cover"
                                    src={category.src}
                                    alt={category.title}
                                />
                                <div className="absolute bottom-0 left-0 p-4 w-full bg-[rgba(0,0,0,0.4)]">
                                    <p className="text-md font-semibold text-white">
                                        {category.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex shrink-0 h-[50vh] min-[1800px]:h-[35%] my-10 p-4 sm:p-0 sm:pl-10 bg-[#1a1a1a]">
                <div className="flex flex-col justify-center flex-1">
                    <h2 className="mb-2 text-gray-200 text-2xl">
                        Seja um parceiro
                    </h2>
                    <p className="text-gray-200 text-md mb-10">
                        Anuncie seus produtos em nosso E-Commerce
                    </p>
                    <button
                        className="py-2 px-4 bg-transparent hover:bg-gray-200 text-gray-200 hover:text-[#1a1a1a] border-gray-200 border-[1px] rounded-full max-w-[150px] transition ease-linear"
                        onClick={() => navigate('/advertisement')}
                    >
                        Conferir
                    </button>
                </div>
                <div className="hidden sm:block flex-1 bg-advertise bg-center bg-cover bg-opacity-0"></div>
            </div>
        </>
    )
}
