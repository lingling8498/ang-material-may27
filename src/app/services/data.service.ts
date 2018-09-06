import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IScreenshot } from '../models/IScreenshot';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public screenShots = [];
  private _url: string = "/assets/data/data.json";
  public errorMsg: string;

  constructor(private _http: HttpClient) { }

   getSpacescreens(): Observable<IScreenshot[]>{
     //return this._http.get<IScreenshot[]>(this._url);
     return this._http.get<IScreenshot[]>(this._url)
                .pipe(
                  catchError(this.errorHandler)
                );
   }

   errorHandler(error: HttpErrorResponse){
     return observableThrowError(error.message || "server Error");
   }

}
