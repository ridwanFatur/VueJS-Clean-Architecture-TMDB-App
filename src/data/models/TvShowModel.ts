import { TvShow } from "../../domain/entities/TvShow";


export function TvShowModel (input: any): TvShow {
  const tvShow: TvShow = new TvShow({
		backdropPath: input.backdrop_path,
		firstAirDate: input.first_air_date,
		genreIds: input.genre_ids.map((e: any) => e),
		id: input.id,
		name: input.name,
		originCountry: input.origin_country.map((e: any) => e),
		originalLanguage: input.original_language,
		originalName: input.original_name,
		overview: input.overview,
		popularity: input.popularity,
		posterPath: input.poster_path,
		voteAverage: input.vote_average,
		voteCount: input.vote_count,

  });

  return tvShow
}
