import { Movie, Review, ReviewMovie } from "./types";

type GenericCardProps =
  | {
      data: Movie;
      variant: "movie";
      width?: string;
      height?: string;
      isHoverable?: boolean;
    }
  | {
      data: ReviewMovie;
      variant: "review";
      width?: string;
      height?: string;
      isHoverable?: boolean;
    };

export type { GenericCardProps };