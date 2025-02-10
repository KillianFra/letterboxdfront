import Image from "next/image";
import { Movie } from "../../types/types";
import { useRouter } from "next/router";
import { BsEye, BsEyeFill, BsFillHeartFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { formatNumber } from "../../utils/handleNumbers";
import { TiHeart } from "react-icons/ti";


export default function MovieCard({movie}: {movie: Movie}) {
    const router = useRouter();
    function handleRedirect() {
        router.push(`/movie/${movie.id}`);
    }
    return (
        <div onClick={handleRedirect} className="relative flex flex-col items-center w-[9.5rem] h-52 justify-center rounded-lg overflow-hidden">
            <Image
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`}
                fill={true}
                alt={movie.title}
            />
            <div className="overlay flex justify-center items-center absolute top-0 left-0 w-full h-full border-lbgreen border-2 hover:opacity-100 opacity-0 duration-200 rounded-lg">
                <div className="flex flex-col items-center w-2/3 h-3/4 bg-black/70">
                    <div className="pt-3 flex flex-col items-center">
                        <BsEyeFill className="text-lbgreen" size={35} />
                        <p className="font-graphikRegular select-none">{formatNumber(movie.voteCount)}</p>
                    </div>
                    <div className="pt-3 flex flex-col items-center">
                        <TiHeart className="text-orange-400" size={35} />
                            <p className="font-graphikRegular select-none">{formatNumber(movie.voteAverage)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}