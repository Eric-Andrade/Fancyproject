import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { global } from '../utils/constants';
import { Categories } from './categories';

@Injectable()
export class CategoriesService {
  public url: string;

  constructor(private _http: Http) {
    this.url = global.url;
  }

  getCategories() {
    return this._http.get(this.url + 'categories')
    .map(res => res.json());
  }

  getCategory(id: number) {
    return this._http.get(this.url + 'categories?id=' + id)
    .map(res => res.json());
  }

  // postCategory(store: Categories) {
  //   return this._http.post(this.url + `products?${body}`, JSON.stringify({body: body}), options)
  //   .map((response:Response) => {
  //     JSON.stringify(response);
  //   });
  // }

  // putCategory(store: Categories): Observable<any> {
  //   return this._http.put(this.url + `products?${body}`, JSON.stringify({body: body}), options)
  //   .map((response: Response) => {
  //     JSON.stringify(response);
  //     console.log('response   ' + response);
  //   });
  //   // .catch(this.handleError);
  // }

  handleError(error: Response) {
    console.error('Error ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

