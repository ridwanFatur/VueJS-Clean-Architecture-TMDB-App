import {
  Failure,
  ServerFailure,
  UnexpectedFailure,
} from "../../../core/Failure";
import {Either} from '../../../core/type';
import {TmdbRepository} from '../../repositories/TmdbRepository';
import { WarningMessage } from "@/core/constants/WarningMessage";


export class GetSearchMulti {
  private repository: TmdbRepository;
	constructor(repository: TmdbRepository){
		this.repository = repository;
	}

  async call(
    params: GetSearchMultiParams,
  ): Promise<Either<Failure, [any[], number]>> {
    try {
      const data = await this.repository.getSearchMulti(params);
      return { right: data };
    } catch (e) {
      if (e instanceof Error) {
        return { left: new ServerFailure(e.message) };
      } else {
        return { left: new UnexpectedFailure(WarningMessage.THERE_IS_UNEXPECTED_ERROR) };
      }
    }
  } 
}

export class GetSearchMultiParams{
  page: number;
  query: string;


  constructor({
    page,
    query,

  }: {
  page: number;
  query: string;

  }){
    this.page = page;
    this.query = query;

  }
}

