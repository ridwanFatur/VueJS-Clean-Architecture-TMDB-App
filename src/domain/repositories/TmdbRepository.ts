import { Failure } from "../../core/Failure";
import { Either} from "../../core/type"
import { Movie } from "../entities/Movie";
import { GetPopularMoviesParams } from "../usecases/tmdb/GetPopularMovies";
import { TvShow } from "../entities/TvShow";
import { GetPopularTvShowsParams } from "../usecases/tmdb/GetPopularTvShows";
import { GetSearchMultiParams } from "../usecases/tmdb/GetSearchMulti";

export interface TmdbRepository{
  getPopularMovies(params: GetPopularMoviesParams) : Promise<[Movie[], number]>;
  getPopularTvShows(params: GetPopularTvShowsParams) : Promise<[TvShow[], number]>;
	getSearchMulti(params: GetSearchMultiParams) : Promise<[any[], number]>;
}

