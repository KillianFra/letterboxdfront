import MovieCard from "@/components/moviecard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaAndroid, FaApple, FaCalendar, FaEye, FaHeart, FaStar } from "react-icons/fa";
import { Movie } from "../../types/types";
import { ImParagraphLeft } from "react-icons/im";
import { LuBlocks } from "react-icons/lu";
import InfoCard from "@/components/infocard";

export default function Home() {

  const router = useRouter();
  const [popularMovies, setPopularMovies] = useState<Movie[]>();
  const [recentReviews, setRecentReviews] = useState<Movie[]>();
  
  
  function handleRedirect() {
    router.push('/signup');
  }

  const infoCards: { icon: React.ReactElement, text: string, className: string}[] = [
    { icon: <FaEye size={40} />, text: 'Keep track of every film you’ve ever watched (or just start from the day you join)', className: 'hover:bg-lbgreen' },
    { icon: <FaHeart size={40} />, text: 'Show some love for your favorite films, lists and reviews with a “like"', className: 'hover:bg-orange-800' },
    { icon: <ImParagraphLeft size={40} />, text: 'Write and share reviews, and follow friends and other members to read theirs', className: 'hover:bg-blue-800' },
    { icon: <FaStar size={40} />, text: 'Rate each film on a five-star scale (with halves) to record and share your reaction', className: 'hover:bg-lbgreen' },
    { icon: <FaCalendar size={40} />, text: 'Keep a diary of your film watching (and upgrade to PRO for comprehensive stats)', className: 'hover:bg-emerald-600' },
    { icon: <LuBlocks size={40} />, text: 'Compile and share lists of films on any topic and keep a watchlist of films to see', className: 'hover:bg-purple-900' }];


  useEffect(() => {
    fetch('/api/movies/popular?limit=6&offset=10').then((res) => res.json()).then((data) => {
      setPopularMovies(data.movies as Movie[])
      console.log(data)
    });
    fetch('/api/movies/reviews/latest').then((res) => res.json()).then((data) => {
      setRecentReviews(data.movies as Movie[])
      console.log(data)
    });
  }, []);

  return (
    <div className="bg-background min-h-screen flex flex-col items-center">
      <div className="relative flex flex-col items-center justify-center h-full">
        <div className="flex w-full lg:w-4/5 shadow-background justify-center shadow-inner bg-cover">
          <Image src={'https://image.tmdb.org/t/p/original' + '/9LSsSPbP715XT9B7acIZzantPyX.jpg'}
            alt="movie"
            className="max-h-[700px] max-w-[1200px]"
            width={1920}
            height={1080} />
        </div >
        <div></div>
        <div className="absolute min-h-[700px] lg:min-w-[1200px] shadow-bottom"></div>
        <div className="absolute flex flex-col bottom-0 font-tiemposTitle tracking-tight text-4xl text-center gap-2">
          <h1>Track films you’ve watched.</h1>
          <h1>Save those you want to see.</h1>
          <h1>Tell your friends what’s good. </h1>
          <div>
            <button onClick={handleRedirect} className="mt-6 bg-lbgreen hover:bg-lbgreenhover text-base text-center items-center font-graphik tracking-widest px-6 py-2 rounded-sm">Get started - it's free!</button>
          </div>
        <div className="text-lg flex items-center justify-center font-sans font-semibold tracking-wide text-gray-500 mt-5 gap-1">
          <p>The social network for film lovers. Also available on</p>
          <FaApple size={30} className="hover:text-white duration-300"/>
          <FaAndroid size={30} className="hover:text-white duration-300"/>
        </div>
        </div>
      </div>
      <div className="recentMovieContainer flex items-center justify-center pt-16 gap-2">
        {popularMovies && popularMovies.map((movie) => {
          return (
            <MovieCard movie={movie} key={movie.id} />
          )
        }
        )}
      </div>
      <div className="informationsContainer px-[10.5rem] text-gray-400 w-2/3 text-sm font-graphik pt-16">
        <div className="flex flex-col gap-2">
          <h1 className="uppercase font-graphikRegular">Letterboxd lets you...</h1>
          <div className="flex gap-1.5 flex-wrap">
            {infoCards.map((info) => {
              return (
                <InfoCard icon={info.icon} text={info.text} className={info.className} />
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-16">
          <h1 className="uppercase font-graphikRegular">Just Reviewed...</h1>
          <div className="flex gap-1.5 flex-wrap">
          </div>
        </div>
      </div>
    </div>
  )
}
