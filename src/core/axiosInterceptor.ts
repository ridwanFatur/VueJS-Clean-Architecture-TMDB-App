import axios, { AxiosInstance } from "axios";
import { Urls } from "./constants/Urls";
 
class AxiosInterceptor {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      params: {
        api_key: Urls.API_KEY,
      },
    });
  }
}

export { AxiosInterceptor };

        