import { Component, AfterViewInit, ViewChild, ChangeDetectionStrategy, OnChanges, SimpleChanges, DoCheck, ChangeDetectorRef } from '@angular/core';
import { filter, forkJoin, map, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { columns, Game, GamesListDTO } from './games.model';
import { GetgamesService } from '../../services/getgames.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, Sort } from '@angular/material/sort';

//apikey = 637a8cb53a4c48189fb3385d3ac56c62
//get games = https://api.rawg.io/api/games


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class HomeComponent implements AfterViewInit, DoCheck {

  displayedColumns: string[] = ['select', 'buttons', 'id', 'name', 'released', 'rating'];
  iterableColumns: columns[] = [{ name: 'id', sort: 'number' }, { name: 'name', sort: 'name' }, { name: 'rating', sort: 'number' }, { name: 'released', sort: 'date' }];

  public games: Array<Game> = []

  dataSource = new MatTableDataSource<Game>(this.games);
  selection = new SelectionModel<Game>(true, []);

  showPic: boolean = false
  pictures: Array<string> = []

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;



  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private getgamesService: GetgamesService, private ref: ChangeDetectorRef
  ) {
    this.getGamesTwoTimes();
  };

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: Game): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  ShowPicturesSelected() {
    this.showPic = true
    this.pictures = this.selection.selected.map((games: Game) => {
      return games.background_image
    })
  }




  getGamesTwoTimes() {

    let observables: Observable<GamesListDTO>[] = []

    for (let i = 1; i < 2; i++) {
      observables.push(this.getgamesService.getGames2(i))
    }
    forkJoin(observables).pipe(
      map((list: GamesListDTO[]) => {
        let results: Array<any> = [];
        for (let i = 0; i < list.length; i++) {
          results = results.concat(list[i].results);
        }
        return results = [...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results]
      }),
      filter((results: Game[] | null | undefined) => {
        return results !== null || results !== undefined;
      }),
      map((results: Game[] | null | undefined) => {
        return results as Game[];
      })
    ).subscribe((res: Game[]) => {
      const startTime = performance.now()
      this.games = [...this.games, ...res];
      this.dataSource.data = this.games;
      const endTime = performance.now()
      console.log(`Call to doSomething took ${(endTime - startTime) / 1000} seconds`)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  validate(row: Game) {
      return row.id % 2 === 0
    }



  ngDoCheck(): void {
    console.log('cambiooo')
  }



  counter() {
    console.log('renders')
  }

  trackBy(index: number, item: Game): string {
    return `${item.id}`;
  }

}