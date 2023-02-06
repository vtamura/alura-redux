import { ChangeEvent, useEffect } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store'
import { resetSearch, setSearch } from '../../store/reducers/search'

export const Search = () => {
    const search = useSelector((state: RootState) => state.search)
    const params = useParams()
    const dispatch = useDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        dispatch(setSearch(e.target.value))

    useEffect(() => {
        dispatch(resetSearch())
    }, [params])

    return (
        <div className="flex flex-1 sm:flex-0 sm:w-[500px] items-center gap-4 px-4 py-2 rounded-full shadow-md">
            <RiSearch2Line />
            <input
                className=" flex-1 outline-none"
                type="text"
                placeholder="O que está procurando hoje?"
                onChange={(e) => handleChange(e)}
                value={search || ''}
            />
        </div>
    )
}
