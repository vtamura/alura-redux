import { useParams } from 'react-router-dom'
import { Hero } from '../../components/Hero'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export const Categories = () => {
    const params = useParams()
    const { category, items } = useSelector((state: RootState) => ({
        category: state.categories.find(
            (category) => category.path === params.category
        ),
        items: state.items.filter((item) => item.category === params.category),
    }))

    return (
        <>
            <Hero
                title={category!.title}
                description={category!.description}
                image={category!.src}
            />
            {items?.map((item) => {
                return <div key={item.id}>{item.title}</div>
            })}
        </>
    )
}
