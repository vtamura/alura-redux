import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { addItem } from '../../store/reducers/items'

export const Advertisement = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state: RootState) => state.categories)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            category: '',
            title: '',
            description: '',
            price: 0,
            src: '',
        },
    })

    const onSubmit = handleSubmit((data) => dispatch(addItem(data)))

    return (
        <div className="container mx-auto my-10 p-4 sm:p-0">
            <h1 className="text-center text-3xl font-semibold text-gray-700">
                Cadastrar um produto
            </h1>
            <form onSubmit={onSubmit}>
                <div className="grid mb-6">
                    <label className="text-lg text-gray-700 mb-2" htmlFor="">
                        Título
                    </label>
                    <input
                        {...register('title', { required: true })}
                        className="outline-none px-4 py-2 border-[1px] rounded-md"
                        type="text"
                    />
                </div>
                <div className="grid mb-6">
                    <label className="text-lg text-gray-700 mb-2" htmlFor="">
                        Descrição
                    </label>
                    <textarea
                        {...register('description', { required: true })}
                        className="resize-none border-[1px] px-4 py-2 rounded-md outline-none"
                    ></textarea>
                </div>
                <div className="grid mb-6">
                    <label className="text-lg text-gray-700 mb-2" htmlFor="">
                        URL da Imagem
                    </label>
                    <input
                        {...register('src', { required: true })}
                        className="outline-none px-4 py-2 border-[1px] rounded-md"
                        type="text"
                    />
                </div>
                <div className="grid mb-6">
                    <label className="text-lg text-gray-700 mb-2" htmlFor="">
                        Categoria
                    </label>
                    <select
                        defaultValue="select"
                        {...register('category', { required: true })}
                        className="outline-none px-4 py-2 border-[1px] rounded-md"
                    >
                        <option value="" disabled>
                            Selecione uma categoria
                        </option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.path}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid mb-6">
                    <label className="text-lg text-gray-700 mb-2" htmlFor="">
                        Preço
                    </label>
                    <input
                        {...register('price', {
                            valueAsNumber: true,
                            required: true,
                        })}
                        className="outline-none px-4 py-2 border-[1px] rounded-md"
                        type="number"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        className="px-8 py-2 outline-none rounded-full border-[1px] border-black hover:bg-black hover:text-white transition ease-linear"
                        type="submit"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}
