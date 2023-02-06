import { useParams } from 'react-router-dom'
import { Hero } from '../../components/Hero'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Item } from './Item'

export const Categories = () => {
    const params = useParams()
    const { category, items } = useSelector((state: RootState) => {
        const regex = new RegExp(state.search, 'i')

        return {
            category: state.categories.find(
                (category) => category.path === params.category
            ),
            items: state.items.filter(
                (item) =>
                    item.category === params.category && item.title.match(regex)
            ),
        }
    })

    return (
        <>
            <Hero
                title={category!.title}
                description={category!.description}
                image={category!.src}
            />
            <div className="container mt-8 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 align-top justify-between">
                    {items?.map((item) => (
                        <Item key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </>
    )
}
