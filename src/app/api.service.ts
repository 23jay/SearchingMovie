import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://www.omdbapi.com/?apikey=4897472c&type=';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAllMovie(url, type): Observable<any> {
    return this.http.get(API_URL + type.name + '&s=' + url).pipe(map((res) => res));
  }
}
