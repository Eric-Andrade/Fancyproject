import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { global } from '../utils/constants';
import { Brands } from './brands';

@Injectable()
export class BrandsService {
  public url: string;

  constructor(private _http: Http) {
    this.url = global.url;
  }

  getBrands() {
    return this._http.get(this.url + 'brands')
    .map(res => res.json());
  }

  getBrand(id: number) {
    return this._http.get(this.url + 'brands?id=' + id)
    .map(res => res.json());
  }

  // postBrand(store: Brands) {
  //   return this._http.post(this.url + `products?${body}`, JSON.stringify({body: body}), options)
  //   .map((response:Response) => {
  //     JSON.stringify(response);
  //   });
  // }

  // putBrand(store: Brands): Observable<any> {
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

