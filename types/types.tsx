type Movie = {
    id: number;
    imdbId: string;
    adult: boolean;
    backdropPath: string;
    originalTitle: string;
    overview: string;
    popularity: string;
    posterPath: string;
    releaseDate: string; // ISO date string
    title: string;
    voteAverage: string;
    voteCount: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    video: boolean;
  };


type Review = {
  body: string
  createdAt: Date
  id: number
  movieId: number
  rating: number
  userId: number
  verified: boolean
};

type ReviewMovie = {
  movies: Movie
  reviews: Review
}

type CardVariant = "movie" | "review";

  
export type { Movie, ReviewMovie, Review, CardVariant };