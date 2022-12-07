import { AxiosInterceptor } from "./core/axiosInterceptor";
import { TmdbRepositoryImpl } from './data/repositories/TmdbRepositoryImpl';
import { TmdbRepository } from './domain/repositories/TmdbRepository';
import { TmdbRemoteDataSource, TmdbRemoteDataSourceImpl } from './data/data_sources/TmdbRemoteDataSource';
import { GetPopularMovies } from './domain/usecases/tmdb/GetPopularMovies';
import { GetPopularTvShows } from './domain/usecases/tmdb/GetPopularTvShows';
import { GetSearchMulti } from "./domain/usecases/tmdb/GetSearchMulti";

// external
const axiosInterceptor = new AxiosInterceptor();

// data source
const tmdbRemoteDataSource = new TmdbRemoteDataSourceImpl(axiosInterceptor);

// repository
const tmdbRepository = new TmdbRepositoryImpl(tmdbRemoteDataSource);

// usecase
const useCaseGetPopularMovies = new GetPopularMovies(tmdbRepository) ;
const useCaseGetPopularTvShows = new GetPopularTvShows(tmdbRepository) ;
const useCaseGetSearchMulti = new GetSearchMulti(tmdbRepository) ;

export { useCaseGetPopularMovies, useCaseGetPopularTvShows , useCaseGetSearchMulti};
