import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://www.omdbapi.com/';
 private apiKey = '70cb3ab'; 

 constructor(private http: HttpClient) {}

 searchMovies(title: string): Observable<any> {
   return this.http.get(`${this.apiUrl}?s=${title}&apikey=${this.apiKey}`);
 }

 getMovieDetails(imdbID: string): Observable<any> {
  return this.http.get(`${this.apiUrl}?i=${imdbID}&apikey=${this.apiKey}`);
 }

 
}