import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { global } from '../utils/constants';
import { Products } from './products';

@Injectable()
export class ProductsService {
  public url: string;
  public filter: string;

  constructor(private _http: Http) {
    this.url = global.url;
  }

  filterProducts(filters) {
    const params = JSON.stringify(filters);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this._http.post(this.url + `filter`, params, { headers: headers })
    .map(res => res.json());
  }

  getProduct(id: number) {
    return this._http.get(this.url + 'products?id=' + id)
    .map(res => res.json());
  }

  // postProduct(store: Products) {
  //   return this._http.post(this.url + `products?${body}`, JSON.stringify({body: body}), options)
  //   .map((response: Response) => {
  //     JSON.stringify(response);
  //   });
  // }

  postFilterBlankProducts(filters) {
    filters.filter = this.filter;
    const params = JSON.stringify(filters);
    const headers = new Headers({ 'Content-Type': 'application/json' });

   console.log('recibido', filters);
   return this._http.post(this.url + 'filter', params, { headers: headers })
   .map(res => res.json());

  }

  // putProduct(store: Products): Observable<any> {
  //   return this._http.put(this.url + `products?${body}`, JSON.stringify({body: body}), options)
  //   .map((response: Response) => {
  //     JSON.stringify(response);
  //     console.log('response   ' + response);
  //   });
  //   // .catch(this.handleError);
  // }

  // private getHeaders() {
  //   const headers = new Headers;
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('cache-control', 'no-cache');
  //   headers.append('status', 'OK');
  //   return headers;
  // }

  handleError(error: Response) {
    console.error('Error ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
