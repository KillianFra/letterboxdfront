import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const [movies, setMovies] = useState();
  const router = useRouter();
  function handleRedirect() {
    router.push('/signup');
  }


  useEffect(() => {
    fetch('/api/movies').then((res) => res.json()).then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <div className="bg-background min-h-screen flex justify-center">
      <div className="relative flex justify-center h-full">
        <div className="flex w-full lg:w-4/5 shadow-background justify-center shadow-inner">
          <Image src={'https://image.tmdb.org/t/p/original' + '/9LSsSPbP715XT9B7acIZzantPyX.jpg'}
            alt="movie"
            className="max-h-[700px] max-w-[1200px]"
            width={1920}
            height={1080} />
        </div >
        <div></div>
        <div className="absolute min-h-[700px] min-w-[1200px] shadow-bottom"></div>
        <div className="absolute flex flex-col bottom-0 font-tiemposTitle tracking-tight text-4xl text-center gap-2">
          <h1>Track films you’ve watched.</h1>
          <h1>Save those you want to see.</h1>
          <h1>Tell your friends what’s good. </h1>
          <div>
            <button onClick={handleRedirect} className="mt-10 bg-lbgreen hover:bg-lbgreenhover text-base text-center items-center font-graphik tracking-wider px-10 py-2 rounded-sm">Get started -- it's free!</button>
          </div>
        </div>
      </div>
    </div>
  )
}
