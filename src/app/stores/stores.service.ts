import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { global } from '../utils/constants';
import { Stores } from './stores';

@Injectable()
export class StoresService {
  public url: string;

  constructor(private _http: Http) {
    this.url = global.url;
  }

  getStores() {
    return this._http.get(this.url + 'stores')
    .map(res => res.json());
  }

  getStore(id: number) {
    return this._http.get(this.url + 'stores?id=' + id)
    .map(res => res.json());
  }

  // postStore(store: Stores) {
  //   return this._http.post(this.url + `stores?${body}`, JSON.stringify({body: body}), options)
  //   .map((response:Response) => {
  //     JSON.stringify(response);
  //   });
  // }

  // putStore(store: Stores): Observable<any> {
  //   return this._http.put(this.url + `stores?${body}`, JSON.stringify({body: body}), options)
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
