import {Component, OnInit} from '@angular/core';
// @ts-ignore
import { data } from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'outsourced-memory';
  data: any;

  ngOnInit(): void {
      this.data = data;
  }
}
