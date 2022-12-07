import {Failure, ServerFailure, UnexpectedFailure} from '../../core/Failure';
import {Either} from '../../core/type';
import {TYPES} from '../../injectionTypes';
import {TmdbRepository} from '../../domain/repositories/TmdbRepository';
import {TmdbRemoteDataSource} from '../data_sources/TmdbRemoteDataSource';
import { Movie } from "@/domain/entities/Movie";
import { GetPopularMoviesParams } from '@/domain/usecases/tmdb/GetPopularMovies';
import { GetPopularMoviesResponse } from '../models/response/tmdb/GetPopularMoviesResponse';
import { TvShow } from "@/domain/entities/TvShow";
import { GetPopularTvShowsParams } from '@/domain/usecases/tmdb/GetPopularTvShows';
import { GetPopularTvShowsResponse } from '../models/response/tmdb/GetPopularTvShowsResponse';
import { GetSearchMultiParams } from '@/domain/usecases/tmdb/GetSearchMulti';
import { GetSearchMultiResponse } from '../models/response/tmdb/GetSearchMultiResponse';

export class TmdbRepositoryImpl implements TmdbRepository {
  private remoteDataSource: TmdbRemoteDataSource;
	constructor(remoteDataSource: TmdbRemoteDataSource){
		this.remoteDataSource = remoteDataSource;
	}

  async getPopularMovies(
    params: GetPopularMoviesParams,
  ): Promise<[Movie[], number]> {
    const result = await this.remoteDataSource.getPopularMovies(params);
    const data: [Movie[], number] = GetPopularMoviesResponse(result);
    return data;
  }

  async getPopularTvShows(
    params: GetPopularTvShowsParams,
  ): Promise<[TvShow[], number]> {
    const result = await this.remoteDataSource.getPopularTvShows(params);
    const data: [TvShow[], number] = GetPopularTvShowsResponse(result);
    return data;
  }

  async getSearchMulti(
    params: GetSearchMultiParams,
  ): Promise<[any[], number]> {
    const result = await this.remoteDataSource.getSearchMulti(params);
    const data: [any[], number] = GetSearchMultiResponse(result);
    return data;
  }

}
