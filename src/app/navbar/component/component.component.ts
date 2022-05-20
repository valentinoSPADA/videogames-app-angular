import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
