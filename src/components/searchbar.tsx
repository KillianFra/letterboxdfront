import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";



export default function Searchbar() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.push("/search/" + search)
    }
    return (
        <div className="flex">
            <form onSubmit={handleSubmit} className="flex items-center relative peer font-sans text-base">
                <IoMdSearch className="text-default absolute right-3 peer-focus:text-black" size={20} />
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    className="peer bg-gray-500/50 hover:bg-gray-200 focus:bg-gray-200 text-xs rounded-full px-2 py-2 outline-none"
                />
            </form>
        </div>
    )
}
