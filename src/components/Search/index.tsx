import { RiSearch2Line } from 'react-icons/ri'

export const Search = () => {
    return (
        <div className="flex flex-1 sm:flex-0 items-center gap-4 px-4 py-2 rounded-full shadow-md">
            <RiSearch2Line />
            <input className=" flex-1 outline-none" type="text" />
        </div>
    )
}
