export class TvShow {
  backdropPath?: string;
  firstAirDate: string;
  genreIds: any[];
  id: number;
  name: string;
  originCountry: any[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularity: number;
  posterPath?: string;
  voteAverage: number;
  voteCount: number;

  constructor({
    backdropPath,
    firstAirDate,
    genreIds,
    id,
    name,
    originCountry,
    originalLanguage,
    originalName,
    overview,
    popularity,
    posterPath,
    voteAverage,
    voteCount,
  }: {
    backdropPath?: string;
    firstAirDate: string;
    genreIds: any[];
    id: number;
    name: string;
    originCountry: any[];
    originalLanguage: string;
    originalName: string;
    overview: string;
    popularity: number;
    posterPath?: string;
    voteAverage: number;
    voteCount: number;
  }) {
    this.backdropPath = backdropPath;
    this.firstAirDate = firstAirDate;
    this.genreIds = genreIds;
    this.id = id;
    this.name = name;
    this.originCountry = originCountry;
    this.originalLanguage = originalLanguage;
    this.originalName = originalName;
    this.overview = overview;
    this.popularity = popularity;
    this.posterPath = posterPath;
    this.voteAverage = voteAverage;
    this.voteCount = voteCount;
  }

  toJson(): any {
    return {
      backdrop_path: this.backdropPath,
      first_air_date: this.firstAirDate,
      genre_ids: this.genreIds.map((e) => e),
      id: this.id,
      name: this.name,
      origin_country: this.originCountry.map((e) => e),
      original_language: this.originalLanguage,
      original_name: this.originalName,
      overview: this.overview,
      popularity: this.popularity,
      poster_path: this.posterPath,
      vote_average: this.voteAverage,
      vote_count: this.voteCount,
    };
  }
}
