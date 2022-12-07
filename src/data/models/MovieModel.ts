import { Movie } from "../../domain/entities/Movie";


export function MovieModel (input: any): Movie {
  const movie: Movie = new Movie({
		adult: input.adult,
		backdropPath: input.backdrop_path,
		genreIds: input.genre_ids.map((e: any) => e),
		id: input.id,
		originalLanguage: input.original_language,
		originalTitle: input.original_title,
		overview: input.overview,
		popularity: input.popularity,
		posterPath: input.poster_path,
		releaseDate: input.release_date,
		title: input.title,
		video: input.video,
		voteAverage: input.vote_average,
		voteCount: input.vote_count,

  });

  return movie
}

