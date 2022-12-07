import { MovieModel } from "../../MovieModel";
import { TvShowModel } from "../../TvShowModel";


export function GetSearchMultiResponse (input: any): [any[], number]{
	const itemList: any[] = [];
	for(const item in input.results){
		try{
			const movieItem = MovieModel(item)
			itemList.push(movieItem);
		}catch(e){
			try{
				const tvShowItem = TvShowModel(item)
				itemList.push(tvShowItem);
			}catch(e){
				// Neither Movie or TvShow
			}
		}
	}
  const result: [any[], number] = [
		itemList, 
		input.total_pages,
	];

  return result;
}
