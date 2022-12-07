export class Urls {
  // Base Url
  static BASE_URL: string = 'https://api.themoviedb.org/3/';
	static API_KEY: string = '';

  static MOVIES_POPULAR: string = `${this.BASE_URL}/movie/popular`;
  static TV_SHOWS_POPULAR: string = `${this.BASE_URL}/tv/popular`;
	static SEARCH_MULTI: string = `${this.BASE_URL}/search/multi`;
}
