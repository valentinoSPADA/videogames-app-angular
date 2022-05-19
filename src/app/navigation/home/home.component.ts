import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { filter, forkJoin, map, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { columns, Game, GamesListDTO } from './games.model';
import { GetgamesService } from '../../services/getgames.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

//apikey = 637a8cb53a4c48189fb3385d3ac56c62
//get games = https://api.rawg.io/api/games


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'released', 'rating'];
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
    private getgamesService: GetgamesService, private _liveAnnouncer: LiveAnnouncer
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

    for (let i = 1; i < 11; i++) {
      observables.push(this.getgamesService.getGames2(i))
    }
    forkJoin(observables).pipe(
      map((list: GamesListDTO[]) => {
        let results: Array<any> = [];
        for (let i = 0; i < list.length; i++) {
          results = results.concat(list[i].results);
        }
        return results;
      }),
      filter((results: Game[] | null | undefined) => {
        return results !== null || results !== undefined;
      }),
      map((results: Game[] | null | undefined) => {
        return results as Game[];
      })
    ).subscribe((res: Game[]) => {
      this.games = [...this.games, ...res];
      this.dataSource.data = this.games;
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

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}