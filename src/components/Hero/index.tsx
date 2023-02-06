import { motion, useScroll, useTransform } from 'framer-motion'

interface IHero {
    image?: string
    title: string
    description: string
}

export const Hero = ({ title, description, image }: IHero) => {
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25])

    return (
        <div
            className={`relative max-w-[100vw] h-1/4 shrink-0 ${
                image ? 'md:h-1/2' : 'md:1/3'
            } oveflow-hidden`}
        >
            {image ? (
                <div className="max-w-full h-full overflow-hidden">
                    <motion.img
                        style={{ scale: scale }}
                        transition={[0.37, 0, 0.63, 1]}
                        className="h-full w-full opacity-90 object-cover"
                        src={image}
                    />
                    <div className="absolute p-4 text-white sm:max-w-[300px] w-[90%] sm:w-auto top-1/2 sm:left-10 left-1/2 bg-[rgba(0,0,0,0.8)] rounded-sm transform -translate-y-1/2 -translate-x-1/2 sm:-translate-x-0">
                        <h1 className="mb-2 text-2xl">{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-full p-4 text-white  bg-[#303030]">
                    <h1 className="mb-2 text-2xl">{title}</h1>
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}
