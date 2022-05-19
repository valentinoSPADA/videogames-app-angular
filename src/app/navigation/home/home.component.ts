import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { Game, GamesListDTO } from './games.model';
import { GetgamesService } from '../../services/getgames.service';


//apikey = 637a8cb53a4c48189fb3385d3ac56c62
//get games = https://api.rawg.io/api/games


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public games: Array<Game> = []


  constructor(
    private getgamesService: GetgamesService
  ) {
    this.getGamesTwoTimes()
  };

  getGamesTwoTimes() {


    for (let i = 1; i < 3; i++) {
      this.getgamesService.getGames2(i)
        .pipe(
          map((list: GamesListDTO) => {
            return list.results;
          }),
          filter((results: Game[] | null | undefined) => {
            return results !== null || results !== undefined;
          }),
          map((results: Game[] | null | undefined) => {
            return results as Game[];
          })
        ).subscribe((res: Game[]) => {
          console.log(res);
          this.games = [...this.games, ...res];
        });
    }
  }
}