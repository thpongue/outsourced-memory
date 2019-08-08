import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nested-list',
  templateUrl: './nested-list.component.html',
  styleUrls: ['./nested-list.component.scss']
})
export class NestedListComponent implements OnInit {
  @Input() data: any;
  dataKeys: any;

  constructor() { }

  ngOnInit() {
    this.dataKeys = !this.isString(this.data) && Object.keys(this.data);
  }

  toString(key: string) {
    return this.isString(this.data[key]) ? key + ': ' + this.data[key] : key;
  }

  private isString(value: any): boolean {
    return typeof value === 'string';
  }
}
