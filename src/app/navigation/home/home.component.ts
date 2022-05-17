import { Component, OnInit } from '@angular/core';
import { GetgamesService } from './getgames.service';


//apikey = 637a8cb53a4c48189fb3385d3ac56c62
//get games = https://api.rawg.io/api/games


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public games: Array<any> = []


  constructor(
    private getgamesService:GetgamesService
  ) { 
    this.getgamesService.getGames().subscribe(res => {
      console.log(res)
      // this.games = res
    })

  }

  ngOnInit(): void {
  }

}
