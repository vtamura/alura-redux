import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import IItem from '../../@types/item'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { RootState } from '../../store'
import { addItem, deleteItem, updateItem } from '../../store/reducers/items'

const initialValues = {
    title: '',
    description: '',
    src: '',
    category: '',
    price: 0,
}

export const Registry = () => {
    const [initialState, setInitialState] =
        useState<Omit<IItem, 'id' | 'favorite'>>(initialValues)
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { categories, items } = useSelector((state: RootState) => ({
        categories: state.categories,
        items: state.items,
    }))

    const handleInputChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setInitialState((state) => ({
            ...state,
            [e.target.name]: e.target.value.toString(),
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (id) {
            dispatch(updateItem({ ...initialState, id, favorite: false }))
            navigate(`/categories/${initialState.category}`)
        } else {
            dispatch(addItem(initialState))
            setInitialState(initialValues)
        }
    }

    useEffect(() => {
        if (id) {
            const item = items.find((item) => item.id == id)

            if (item) {
                setInitialState(item)
            } else {
                navigate('/')
            }
        }
    }, [id])

    return (
        <div className="container mx-auto my-10 p-4 sm:p-0">
            <h1 className="text-center text-3xl font-semibold text-gray-700">
                {id ? 'Atualizar produto' : 'Cadastrar um produto'}
            </h1>
            <form onSubmit={handleSubmit}>
                <Input
                    id="title"
                    label="Título"
                    name="title"
                    type="text"
                    onChange={handleInputChange}
                    required={!id}
                    value={initialState.title}
                />
                <Input
                    id="description"
                    label="Descrição"
                    name="description"
                    type="text"
                    onChange={handleInputChange}
                    required={!id}
                    value={initialState.description}
                />
                <Input
                    id="URL"
                    label="URL da Imagem"
                    name="src"
                    type="text"
                    onChange={handleInputChange}
                    required={!id}
                    value={initialState.src}
                />
                <Select
                    label="Categoria"
                    name="category"
                    value={initialState.category}
                    required={!id}
                    onChange={handleInputChange}
                    options={categories.map((category) => ({
                        id: category.id.toString(),
                        label: category.title,
                        value: category.path,
                    }))}
                />
                <Input
                    id="price"
                    label="Preço"
                    name="price"
                    type="number"
                    onChange={handleInputChange}
                    required={!id}
                    value={initialState.price.toString()}
                />
                <div className="flex justify-end gap-4">
                    {id && (
                        <button
                            className="px-8 py-2 outline-none rounded-full border-[1px] text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition ease-linear"
                            type="submit"
                            onClick={() => dispatch(deleteItem(id))}
                        >
                            Excluir
                        </button>
                    )}
                    <button
                        className="px-8 py-2 outline-none rounded-full border-[1px] border-black hover:bg-black hover:text-white transition ease-linear"
                        type="submit"
                    >
                        {id ? 'Atualizar' : 'Enviar'}
                    </button>
                </div>
            </form>
        </div>
    )
}
