import { TvShowModel } from "@/data/models/TvShowModel";
import { TvShow } from "@/domain/entities/TvShow";


export function GetPopularTvShowsResponse (input: any): [TvShow[], number]{
  const result: [TvShow[], number] = [input.results.map((e: any) => TvShowModel(e)), input.total_pages];

  return result;
}
