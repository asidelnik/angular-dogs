import { Component, OnInit } from '@angular/core';

const DOGS = [
   { name: 'Rex', weight: 20, birthDate: new Date(1988, 3, 22), owner: 'Mike Perry'},
   { name: 'Woof', weight: 8, birthDate: new Date(1987, 5, 15), owner: 'Sarah Abrahamson'},
   { name: 'Chuck', weight: 28, birthDate: new Date(1986, 3, 24), owner: 'Lara Croft'},
   { name: 'Barkley', weight: 4, birthDate: new Date(1985, 7, 15), owner: 'Jerry Seinfeld'},
   { name: 'Prince', weight: 65, birthDate: new Date(1984, 3, 1), owner: 'Jack Daniels'}
];

@Component({
   selector: 'app-dogs-component',
   templateUrl: './dogs-component.component.html',
   styleUrls: ['./dogs-component.component.scss']
})
export class DogsComponentComponent implements OnInit {
   dogs: Array<any> = DOGS;

   constructor() { }

   ngOnInit() {
   }

}
