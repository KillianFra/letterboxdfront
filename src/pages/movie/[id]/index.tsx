import { useRouter } from "next/router";
import { retrieveMovie } from "../../../../utils/movieService";
import Image from "next/image";
import { Movie } from "../../../../types/types";
import { useEffect, useState } from "react";
import { TiHeart } from "react-icons/ti";
import { BsEyeFill } from "react-icons/bs";
import { useUser } from "@/hooks/useUser";
import { ClockArrowUp, Eye, Heart, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

export default function Page() {
  const user = useUser();
  const router = useRouter();
  const id = router.query.id;
  const [movie, setMovie] = useState<Movie | null>(null);
  const [watchDate, setWatchDate] = useState<Date>(new Date())
  const [rating, setRating] = useState(0);
  
  useEffect(() => {
    const fetchMovie = async () => {
      if (id) {
        const movie = await retrieveMovie(id as string);
        setMovie(movie);
        console.log(movie)
      }
    }
    fetchMovie();
  }, [id]);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ watchDate, rating });
  };
  return (
    movie &&
    <div className="flex flex-col w-full items-center justify-center">
      <div className="relative w-full h-[700px] lg:w-[1200px] lg:h-[700px]">
        <Image src={'https://image.tmdb.org/t/p/original' + movie.backdropPath}
          alt="movie"
          className="max-h-[700px] max-w-[1200px]"
          fill={true}
        />
        <div className="absolute min-h-[700px] lg:min-w-[1200px] shadow-bottomMovie" />
      </div>
      <div className="flex w-2/3 h-full">
        <div className="flex flex-col items-center w-1/3 h-screen ">
          <div className="relative w-2/3 h-96 border-b-0.1 border-white/50 rounded-sm">
            <Image src={'https://image.tmdb.org/t/p/original' + movie.posterPath}
              alt="movie"
              className="max-h-[700px] max-w-[1200px] rounded-xl"
              fill={true}
            />
          </div>
          <div className="flex gap-4 mt-1">
            <div className="flex items-center gap-1">
              <BsEyeFill className="text-lbgreen my-auto mt-[3px]" size={17} />
              <p className="font-graphikRegular text-sm select-none text-gray-400">
                {movie.voteCount}
              </p>
            </div>
            <div className="flex items-center text-center gap-1">
              <TiHeart className="text-orange-400" size={17} />
              <p className="font-graphikRegular text-sm select-none text-gray-400">
                {movie.voteAverage}
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-screen">
          <div className="flex place-items-end gap-4 mr-8">
            <h1 className="text-4xl">{movie.title}</h1>
            <p className="text-lg underline font-normal font-graphikRegular text-gray-400">{movie.releaseDate.split('-')[0]}</p>
          </div>
          <div className="flex mr-8 mt-8">
            <div className="flex w-2/3">
              <div className="font-graphikRegular tracking-tight">
                <p>{movie.overview}</p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex flex-col gap-0.5">
                {user.user ? (
                  <>
                    <div className="flex bg-gray-600 font-sm text-xs font-normal rounded-t-sm p-2 justify-around px-5">
                      <div className="flex flex-col items-center gap-0.5">
                        <a href="/">
                          <Eye className="text-gray-300" strokeWidth={0.75} size={40} />
                        </a>
                        <p className="select-none text-gray-200 font-sans">
                          Watch
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <a href="/">
                          <Heart className="text-gray-300" strokeWidth={0.75} size={40} />
                        </a>
                        <p className="select-none text-gray-200 font-sans">
                          Like
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <a href="/">
                          <ClockArrowUp className="text-gray-300" strokeWidth={0.75} size={40} />
                        </a>
                        <p className="select-none text-gray-200 font-sans">
                          WatchList
                        </p>
                      </div>
                    </div>
                    <div className="flex bg-gray-600 font-sm text-xs font-normal p-2 justify-around px-5">
                      <Dialog>
                        <DialogTrigger className="bg-gray-600 text-center">
                          <p className="text-gray-300 text-sm font-sans tracking-tight">Review or log..</p>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[850px] bg-[#456] border-none">
                          <DialogHeader>
                            <div className="flex justify-between items-center border-b">
                              <DialogTitle className="text-xl font-sans text-white">I watched...</DialogTitle>
                            </div>
                          </DialogHeader>
                          <form onSubmit={onSubmit}>
                            <div className="flex gap-4 py-4">
                              <div className="w-1/4">
                                <Image 
                                  src={'https://image.tmdb.org/t/p/original' + movie.posterPath}
                                  alt={movie.title}
                                  width={120}
                                  height={180}
                                  className="rounded-md"
                                />
                              </div>
                              <div className="w-3/4 space-y-4">
                                <div>
                                  <h2 className="text-xl text-white font-tiempos">{movie.title} <span className="ml-2 text-sm text-gray-400">{movie.releaseDate.split('-')[0]}</span></h2>
                                </div>
                                <div className="space-y-4">
                                  <div className="flex items-center gap-10">
                                    <Input
                                      type="date"
                                      className="w-[200px] bg-[#567] text-white border-none"
                                      value={format(watchDate, "PPP")}
                                      onChange={(e) => setWatchDate(new Date(e.target.value))}
                                    />
                                    <div className="flex items-center gap-2">
                                      <Checkbox id="rewatched" className="border-gray-400" />
                                      <label htmlFor="rewatched" className="text-sm text-gray-300">
                                        I've watched this film before
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <button
                                        key={star}
                                        onClick={() => setRating(star)}
                                        className={`w-8 h-8 ${rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
                                      >
                                        <Star fill={rating >= star ? 'yellow' : 'transparent'} />
                                      </button>
                                    ))}
                                  </div>
                                </div>
                                <textarea
                                  className="w-full h-32 bg-[#567] text-white p-3 rounded-md resize-none border-none placeholder:text-gray-400"
                                  placeholder="Add a review..."
                                />
                                <div className="flex justify-between items-center">
                                  <input
                                    type="text"
                                    placeholder="Add tags..."
                                    className="bg-[#567] text-white p-2 rounded-md border-none placeholder:text-gray-400"
                                  />
                                  <button 
                                    type="submit" 
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                  >
                                    SAVE
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </>
                ) : (
                    <>
                      <a href="/" className="bg-gray-600 rounded-t-md text-center py-3">
                        <p className="text-gray-300 text-sm font-sans tracking-tight">Sign in to log, rate or review</p>
                      </a>
                      <a href="/" className="bg-gray-600 text-center py-3">
                        <p className="text-gray-300 text-sm font-sans tracking-tight">Share</p>
                      </a>
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}