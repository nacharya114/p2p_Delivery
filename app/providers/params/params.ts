import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Params provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Params {

  public data: any;

  constructor(private http: Http) {
      this.data = {};
  }

  public get(key: String) {
    console.log(key);
    console.log(this.data);
     if (this.data.key) {
         return this.data.key;
     }
     return undefined;
  }

}

