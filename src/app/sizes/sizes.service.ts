import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { global } from '../utils/constants';
import { Sizes } from './/sizes';

@Injectable()
export class SizesService {
  public url: string;

  constructor(private _http: Http) {
    this.url = global.url;
  }

  getSizes() {
    return this._http.get(this.url + 'measurement')
    .map(res => res.json());
  }

  getSize(id: number) {
    return this._http.get(this.url + 'measurement?id=' + id)
    .map(res => res.json());
  }

  // postSize(store: Sizes) {
  //   return this._http.post(this.url + `products?${body}`, JSON.stringify({body: body}), options)
  //   .map((response:Response) => {
  //     JSON.stringify(response);
  //   });
  // }

  // putSize(store: Sizes): Observable<any> {
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

