import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getRecentMovies(): Observable<any>{
    let response = this.httpClient.get("https://localhost:7005/api/Cliente");
    return response;
  }
}
