<<<<<<< HEAD
import { Component, OnInit, Input, EventEmitter, Output, OnChanges, OnDestroy } from '@angular/core';
=======
import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
>>>>>>> 8d2819ceb8ee070b07fb5cd6a08411d143b738f5
import { Dog } from '../dog';
import Walk from '../walk';

@Component({
  selector: 'app-add-walk',
  templateUrl: './add-walk.component.html',
  styleUrls: ['./add-walk.component.scss']
})
export class AddWalkComponent implements OnInit, OnChanges, OnDestroy {

  @Input() dog : Dog = new Dog();
  @Output() walkAdded : EventEmitter<Walk> = new EventEmitter();
  description: string;
  intervalId: number;

  constructor() { }

  ngOnInit() {
    this.intervalId = window.setInterval(() => console.log('Hello!'),  1000);
  }

  ngOnChanges(changes) {
    console.log("changed! " + JSON.stringify(changes));
  }
  ngOnDestroy() {
    window.clearInterval(this.intervalId);
  }

  submit() {
    let newWalk = new Walk(new Date(), this.description);
    this.walkAdded.emit(newWalk);
  }

}
