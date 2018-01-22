import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { global } from '../utils/constants';
import { Colors } from './colors';

@Injectable()
export class ColorsService {
  public url: string;

  constructor(private _http: Http) {
    this.url = global.url;
  }

  getColors() {
    return this._http.get(this.url + 'generalcolor')
    .map(res => res.json());
  }

  getColor(id: number) {
    return this._http.get(this.url + 'colors?id=' + id)
    .map(res => res.json());
  }

  // postColor(store: Colors) {
  //   return this._http.post(this.url + `products?${body}`, JSON.stringify({body: body}), options)
  //   .map((response:Response) => {
  //     JSON.stringify(response);
  //   });
  // }

  // putColor(store: Colors): Observable<any> {
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

