import {
  Failure,
  ServerFailure,
  UnexpectedFailure,
} from "../../../core/Failure";
import { Either } from "../../../core/type";
import { TmdbRepository } from "../../repositories/TmdbRepository";
import { TYPES } from "../../../injectionTypes";
import { WarningMessage } from "@/core/constants/WarningMessage";
import { TvShow } from "@/domain/entities/TvShow";

export class GetPopularTvShows {
  private repository: TmdbRepository;
  constructor(repository: TmdbRepository) {
    this.repository = repository;
  }

  async call(
    params: GetPopularTvShowsParams,
  ): Promise<Either<Failure, [TvShow[], number]>> {
    try {
      const data = await this.repository.getPopularTvShows(params);
      return { right: data };
    } catch (e) {
      if (e instanceof Error) {
        return { left: new ServerFailure(e.message) };
      } else {
        return {
          left: new UnexpectedFailure(WarningMessage.THERE_IS_UNEXPECTED_ERROR),
        };
      }
    }
  }
}

export class GetPopularTvShowsParams {
  page: number;

  constructor({ page }: { page: number }) {
    this.page = page;
  }
}
