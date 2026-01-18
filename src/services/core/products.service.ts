import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SKIP_LOADING } from "src/interceptors/core/loading.interceptor";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    constructor(private http: HttpClient) {
    }

    me(){
      //By default, the loading interceptor will be applied
      this.http.get('https://localhost:7289/api/products/me').subscribe({});

      //Skip the loading interceptor for this request
      // this.http.get('https://localhost:7289/api/products/me', {
      //   context: new HttpContext().set(SKIP_LOADING, true)
      // }).subscribe({});
    }
}