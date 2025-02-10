import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export default function Searchbar() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.push("/search/" + search);
    }

    return (
        <div className="flex group">
            <form onSubmit={handleSubmit} className="flex items-center relative font-sans text-base">
                <IoMdSearch
                    className="text-gray-400 absolute right-3 transition-colors duration-200 group-hover:text-black peer-focus:text-black"
                    size={20}
                />
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    className="peer bg-gray-500/50 hover:bg-gray-300 focus:bg-gray-100 focus:text-black hover:text-black font-semibold text-xs rounded-full px-2 py-2 outline-none duration-200"
                />
            </form>
        </div>
    );
}