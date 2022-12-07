import { MovieModel } from "@/data/models/MovieModel";
import { Movie } from "@/domain/entities/Movie";


export function GetPopularMoviesResponse (input: any): [Movie[], number]{
  const result: [Movie[], number] = [input.results.map((e: any) => MovieModel(e)), input.total_pages];

  return result;
}
