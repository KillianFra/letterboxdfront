import { Movie } from "../types/types";



export async function retrieveMovie(id: string) : Promise<Movie> {
    const response = await fetch(`/api/movies/${id}`);
    if (!response.ok) {
        throw new Error('Movie not found');
    }
    const data = await response.json();
    const movie = data.movie[0] as Movie;
    return movie;
}