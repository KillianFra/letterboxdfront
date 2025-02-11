import { useRouter } from "next/router";
import { GenericCardProps } from "../../types/genericCard";
import { formatNumber } from "../../utils/handleNumbers";
import Image from "next/image";
import { BsEyeFill } from "react-icons/bs";
import { TiHeart } from "react-icons/ti";





export default function GenericCard({
    data,
    variant,
    width,
    height,
    isHoverable = true,
}: GenericCardProps) {
    const router = useRouter();

    const cardWidth = width || "9.5rem";
    const cardHeight = height || "13rem";

    const handleRedirect = () => {
        if (variant === "movie") {
            router.push(`/movie/${data.id}`);
        } else if (variant === "review") {
            router.push(`/${data.reviews.userId}/films/${data.reviews.movieId}`);
        }
    };

    // Determine what image and title to show.
    const posterPath =
        variant === "movie" ? data.posterPath : data.movies.posterPath;
    const title = variant === "movie" ? data.title : data.movies.title;
    const voteCount =
        variant === "movie"
            ? Number(data.voteCount)
            : Number(data.movies.voteCount);
    const secondValue =
        variant === "movie"
            ? Number(data.voteAverage)
            : data.reviews.rating;

    return (
        <div
            onClick={handleRedirect}
            style={{ width: cardWidth, height: cardHeight }}
            className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden cursor-pointer border-0.1 border-white/10"
        >
            <Image
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${posterPath}`}
                layout='fill'
                alt={title}
            />
            <div className="overlay flex justify-center items-center absolute top-0 left-0 w-full h-full border-lbgreen border-2 hover:opacity-100 opacity-0 duration-200 rounded-lg">
                {
                    isHoverable && (
                        <div className="flex flex-col items-center w-2/3 h-3/4 bg-black/70">
                            <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex flex-col items-center justify-center">
                                <div className="flex flex-col items-center">
                                    <BsEyeFill className="text-lbgreen" size={35} />
                                    <p className="font-graphikRegular select-none">
                                        {formatNumber(voteCount)}
                                    </p>    
                                </div>
                                <div className="flex flex-col items-center">
                                    <TiHeart className="text-orange-400" size={35} />
                                    <p className="font-graphikRegular select-none">
                                        {formatNumber(secondValue)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}