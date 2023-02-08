import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sushchenia.github.io';

  parameter: string = '';

  ngOnInit() {
    // @ts-ignore
    this.parameter = window.location.search.split('parameter=')[1];
  }


}
