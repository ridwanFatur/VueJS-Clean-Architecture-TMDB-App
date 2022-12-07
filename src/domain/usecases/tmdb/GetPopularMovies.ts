import {
  Failure,
  ServerFailure,
  UnexpectedFailure,
} from "../../../core/Failure";
import { Either } from "../../../core/type";
import { TmdbRepository } from "../../repositories/TmdbRepository";
import { TYPES } from "../../../injectionTypes";
import { WarningMessage } from "@/core/constants/WarningMessage";
import { Movie } from "@/domain/entities/Movie";

export class GetPopularMovies {
  private repository: TmdbRepository;
  constructor(repository: TmdbRepository) {
    this.repository = repository;
  }

  async call(
    params: GetPopularMoviesParams,
  ): Promise<Either<Failure, [Movie[], number]>> {
    try {
      const data = await this.repository.getPopularMovies(params);
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

export class GetPopularMoviesParams {
  page: number;

  constructor({ page }: { page: number }) {
    this.page = page;
  }
}
