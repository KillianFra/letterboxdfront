import Image from "next/image";
import Searchbar from "./searchbar";

export default function navbar() {
    return (
        <div className="bg-transparent w-full absolute flex pt-2 items-center lg:justify-center z-50">
            <Image src="/logo.svg" alt="logo" width={250} height={250} />
            <div className="ml-10 mr-5 font-graphik flex items-center uppercase text-xsm tracking-widest  text-default font-medium">
                <a href="#" className="bg-accent px-3 py-2 hover:text-white rounded-md ">Sign in</a>
                <a href="#" className="bg-accent px-3 py-2 hover:text-white  rounded-md">Create account</a>
                <a href="#" className="hover:text-white px-3 py-2 rounded-md">Films</a>
                <a href="#" className="hover:text-white px-3 py-2 rounded-md">Lists</a>
                <a href="#" className="hover:text-white px-3 py-2 rounded-md">Members</a>
            </div>
            <Searchbar />
        </div>
    )
}