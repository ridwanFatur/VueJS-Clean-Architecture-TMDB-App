import { AxiosInterceptor } from "@/core/axiosInterceptor";
import { Urls } from "@/core/constants/Urls";
import { TYPES } from "@/injectionTypes";
import { AxiosError } from "axios";
import { WarningMessage } from "@/core/constants/WarningMessage";
import { GetPopularMoviesParams } from "@/domain/usecases/tmdb/GetPopularMovies";
import { GetPopularTvShowsParams } from "@/domain/usecases/tmdb/GetPopularTvShows";
import { GetSearchMultiParams } from "@/domain/usecases/tmdb/GetSearchMulti";

export interface TmdbRemoteDataSource {
  getPopularMovies(params: GetPopularMoviesParams): Promise<any>;
  getPopularTvShows(params: GetPopularTvShowsParams): Promise<any>;
  getSearchMulti(params: GetSearchMultiParams): Promise<any>;
}

export class TmdbRemoteDataSourceImpl implements TmdbRemoteDataSource {
  private client: AxiosInterceptor;
  constructor(client: AxiosInterceptor) {
    this.client = client;
  }

  async getPopularMovies(params: GetPopularMoviesParams): Promise<any> {
    try {
      const response = await this.client
        .instance
        .get(Urls.MOVIES_POPULAR, {
          params: {
						'page': params.page,
          },
        });

      if (response.status == 200) {
        return response.data;
      } else {
        throw new Error(`Server Error : ${response.status}`);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(`Server Error: ${e.response?.status}`);
      } else {
        throw new Error(WarningMessage.SOMETHING_WENT_WRONG);
      }
    }
  }
	
  async getPopularTvShows(params: GetPopularTvShowsParams): Promise<any> {
    try {
      const response = await this.client
        .instance
        .get(Urls.TV_SHOWS_POPULAR, {
          params: {
						'page': params.page,
          },
        });

      if (response.status == 200) {
        return response.data;
      } else {
        throw new Error(`Server Error : ${response.status}`);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(`Server Error: ${e.response?.status}`);
      } else {
        throw new Error(WarningMessage.SOMETHING_WENT_WRONG);
      }
    }
  }

	async getSearchMulti(params: GetSearchMultiParams): Promise<any> {
    try {
      const response = await this.client
        .instance
        .get(Urls.SEARCH_MULTI, {
          params: {
          'page': params.page,
          'query': params.query,

          },
        });

      if (response.status == 200) {
        return response.data;
      } else {
        throw new Error(`Server Error : ${response.status}`);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(`Server Error: ${e.response?.status}`);
      } else {
        throw new Error(WarningMessage.SOMETHING_WENT_WRONG);
      }
    }
  }
}

