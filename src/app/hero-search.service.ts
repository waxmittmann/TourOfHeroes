import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    console.log("Searching ");
    return this.http
              .get(`app/heroes/?name=${term}`)
              .map(response => {
                console.log("Got response: " + response.json().data);
                return response.json().data as Hero[];
              });
  }
}
