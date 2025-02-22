import Image from "next/image";
import Searchbar from "./searchbar";
import { useState } from "react";
import AuthModal from "./authModal";
import { useUser } from "../hooks/useUser";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
    const { user, loading } = useUser();
    console.log(user);
    const [authType, setAuthType] = useState<null | "login" | "register">(null);
    const router = useRouter();

    const handleSignOut = () => {
        Cookies.remove("token");
        router.reload();
    };
    
    return (
        <div className="bg-transparent w-full absolute flex pt-2 items-center justify-center z-50">
            <a href="/" className="lg:block hidden">
                <Image src="/logo.svg" alt="logo" width={250} height={250} />
            </a>
            <div className="ml-10 mr-5 font-graphik flex items-center text-xsm tracking-widest text-default font-medium">
                {authType ? (
                    <AuthModal type={authType} onClose={() => setAuthType(null)} />
                ) : (
                    <div className="flex uppercase">
                        {loading ? (
                            <p className="px-3 py-2">Loading...</p>
                        ) : user ? (
                            <Popover>
                                <PopoverTrigger>
                                    <div className="flex items-center cursor-pointer px-2">
                                        <Avatar className="size-8">
                                            <AvatarImage src="/avatar-placeholder.png" alt={user.username} />
                                            <AvatarFallback className="uppercase">{user.username?.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <span className="ml-2 py-2 uppercase">{user.username}</span>
                                        <RiArrowDropDownLine size={30} />
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Button variant="destructive" onClick={handleSignOut}>Sign Out</Button>
                                </PopoverContent>
                            </Popover>
                        ) : (
                            <>
                                <a className="px-3 py-2 hover:text-white rounded-md cursor-pointer" onClick={() => setAuthType("login")}>Sign in</a>
                                <a className="px-3 py-2 hover:text-white rounded-md cursor-pointer" onClick={() => setAuthType("register")}>Create account</a>
                            </>
                        )}
                        <Link href="#" className="hover:text-white px-3 py-2 rounded-md">Films</Link>
                        <Link href="#" className="hover:text-white px-3 py-2 rounded-md">Lists</Link>
                        <Link href="#" className="hover:text-white px-3 py-2 rounded-md">Members</Link>
                        <Searchbar />
                    </div>
                )}
            </div>
        </div>
    );
}
