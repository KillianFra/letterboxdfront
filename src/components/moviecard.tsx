import Image from "next/image";
import { Movie } from "../../types/types";
import { useRouter } from "next/router";


export default function MovieCard({movie}: {movie: Movie}) {
    const router = useRouter();
    function handleRedirect() {
        router.push(`/movie/${movie.id}`);
    }
    return (
        <div onClick={handleRedirect} className="relative flex flex-col items-center justify-center hover:cursor-pointer hover:bg-blue-900">
            <Image
                className="w-[9.5rem] h-52 rounded-sm"
                src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
                height={290}
                width={140}
                alt={movie.title}
            />
        </div>
    );
}