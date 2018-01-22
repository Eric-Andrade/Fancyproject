import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { global } from '../utils/constants';
import { Subcategories } from './subcategories';

@Injectable()
export class SubcategoriesService {
  public url: string;

  constructor(private _http: Http) {
    this.url = global.url;
  }

  getSubcategories() {
    return this._http.get(this.url + 'subcategories')
    .map(res => res.json());
  }

  getSubcategory(id: number) {
    return this._http.get(this.url + 'subcategories?id=' + id)
    .map(res => res.json());
  }

  // postSubcategory(store: Subcategories) {
  //   return this._http.post(this.url + `products?${body}`, JSON.stringify({body: body}), options)
  //   .map((response:Response) => {
  //     JSON.stringify(response);
  //   });
  // }

  // putSubcategory(store: Subcategories): Observable<any> {
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

