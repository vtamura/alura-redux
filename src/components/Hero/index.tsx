interface IHero {
    image: string
    title: string
    description: string
}

export const Hero = ({ title, description, image }: IHero) => {
    return (
        <div className="relative max-w-full h-1/2 oveflow-hidden">
            <img
                className="h-full w-full opacity-90 object-cover"
                src={image}
            />
            <div className="absolute p-4 text-white sm:max-w-[300px] w-[90%] sm:w-auto top-1/2 sm:left-10 left-1/2 bg-[rgba(0,0,0,0.8)] rounded-sm transform -translate-y-1/2 -translate-x-1/2 sm:-translate-x-0">
                <h1 className="mb-2 text-2xl">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}
