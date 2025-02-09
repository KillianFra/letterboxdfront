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

  
export type { Movie };