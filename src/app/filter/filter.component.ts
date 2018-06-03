import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filterString : string;
  @Output() filterChanged : EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log("filter string from constructor is: " + this.filterString);
   }

  ngOnInit() {
    console.log("filter string from ngOnInit is: " + this.filterString);
  }

  changeFilter() {
    this.filterChanged.emit(this.filterString);
  }

}
