import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { GamesListDTO } from './games.model';

@Injectable({
  providedIn: 'root'
})
export class GetgamesService {

  url: string = 'https://api.rawg.io/api/games?key=637a8cb53a4c48189fb3385d3ac56c62'

  constructor(
    private http: HttpClient
  ) {
    console.log('prueba')
  }



  getGames(): Observable<GamesListDTO> {
    let headers = new HttpHeaders()
    return this.http.get(this.url, {
      headers: headers
    })
  }

}
