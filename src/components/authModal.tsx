// filepath: /c:/Users/frava/OneDrive/Documents/Ynov/Api/letterboxdfront/src/components/authModal.tsx
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { login, register } from "../../utils/authService";
import { useRouter } from "next/router";

export default function AuthModal({ type, onClose } : { type: string, onClose: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (type === 'register') {
        await register(username, password);
    } else {
        const data = await login(username, password);
        document.cookie = `token=${data.token}`;
        await router.reload();
        }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full bg-[#14181C] py-2 ml-10 mr-5 px-3 flex text-gray-500">
      <form onSubmit={handleSubmit} className="flex gap-4 text-xs items-center">
        <CgClose className="cursor-pointer" size={15} onClick={onClose} />
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xxs">Username</label>
          <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} className="p-1.5 bg-[#2C3440] text-gray-400 border-b-0.1 border-white/30 focus:outline-none focus:bg-white focus:text-black rounded-sm" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-xxs">Password</label>
          <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} className="p-1.5 bg-[#2C3440] text-gray-400 border-b-0.1 border-white/30 focus:outline-none focus:bg-white focus:text-black rounded-sm" />
        </div>
        <button type="submit" className=" text-white px-4 py-2 bg-green-800 border-b-0.1 border-white/30 mt-4">Sign in</button>
      </form>
    </div>
  );
}