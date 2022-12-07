export class Movie {
  adult: boolean;
  backdropPath?: string;
  genreIds: any[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath?: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;

  constructor({
    adult,
    backdropPath,
    genreIds,
    id,
    originalLanguage,
    originalTitle,
    overview,
    popularity,
    posterPath,
    releaseDate,
    title,
    video,
    voteAverage,
    voteCount,
  }: {
    adult: boolean;
    backdropPath?: string;
    genreIds: any[];
    id: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath?: string;
    releaseDate: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
  }) {
    this.adult = adult;
    this.backdropPath = backdropPath;
    this.genreIds = genreIds;
    this.id = id;
    this.originalLanguage = originalLanguage;
    this.originalTitle = originalTitle;
    this.overview = overview;
    this.popularity = popularity;
    this.posterPath = posterPath;
    this.releaseDate = releaseDate;
    this.title = title;
    this.video = video;
    this.voteAverage = voteAverage;
    this.voteCount = voteCount;
  }

  toJson(): any {
    return {
      adult: this.adult,
      backdrop_path: this.backdropPath,
      genre_ids: this.genreIds.map((e) => e),
      id: this.id,
      original_language: this.originalLanguage,
      original_title: this.originalTitle,
      overview: this.overview,
      popularity: this.popularity,
      poster_path: this.posterPath,
      release_date: this.releaseDate,
      title: this.title,
      video: this.video,
      vote_average: this.voteAverage,
      vote_count: this.voteCount,
    };
  }
}
