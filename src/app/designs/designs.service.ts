import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { global } from '../utils/constants';
import { Designs } from './designs';

@Injectable()
export class DesignsService {
  public url: string;

  constructor(private _http: Http) {
    this.url = global.url;
  }

  getDesigns() {
    return this._http.get(this.url + 'stores')
    .map(res => res.json());
  }

  getDesign(id: number) {
    return this._http.get(this.url + 'stores?id=' + id)
    .map(res => res.json());
  }

  // postDesign(store: Designs) {
  //   return this._http.post(this.url + `stores?${body}`, JSON.stringify({body: body}), options)
  //   .map((response:Response) => {
  //     JSON.stringify(response);
  //   });
  // }

  // putDesign(store: Designs): Observable<any> {
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
