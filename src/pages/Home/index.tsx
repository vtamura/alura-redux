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
            <div>
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
            </div>
        </>
    )
}
