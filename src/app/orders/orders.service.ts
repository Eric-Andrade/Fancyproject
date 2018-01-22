import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { global } from '../utils/constants';
import { Orders } from './orders';

@Injectable()
export class OrdersService {
  public url: string;

  constructor(private _http: Http) {
    this.url = global.url;
  }

  getOrders() {
    return this._http.get(this.url + 'orders')
    .map(res => res.json());
  }

  getOrder(id: number) {
    return this._http.get(this.url + 'orders?id=' + id)
    .map(res => res.json());
  }

  // postOrder(store: Orders) {
  //   return this._http.post(this.url + `orders?${body}`, JSON.stringify({body: body}), options)
  //   .map((response:Response) => {
  //     JSON.stringify(response);
  //   });
  // }

  // putOrder(store: Orders): Observable<any> {
  //   return this._http.put(this.url + `orders?${body}`, JSON.stringify({body: body}), options)
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
