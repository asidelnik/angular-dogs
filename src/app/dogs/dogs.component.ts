import { Component, OnInit } from '@angular/core';

import { DogsService } from '../dogs.service';
import { Dog } from '../dog';



@Component({
   selector: 'app-dogs',
   templateUrl: './dogs.component.html',
   styleUrls: ['./dogs.component.scss']
})

export class DogsComponent implements OnInit {

   dogs = new Array<Dog>();
   dateFormat: string = 'fullDate'

   constructor(private dogsService: DogsService) {
      this.dogs = dogsService.getDogs();
   }

   ngOnInit() {
   }

   servRemoveDog(index) {
      this.dogsService.removeDog(index);
   }

   toggleDate() {
      this.dateFormat == 'fullDate' ? this.dateFormat = 'shortDate' : this.dateFormat = 'fullDate';
   }
   dogsCompCreateDog(idx) {
      // create the dog object
      // push it to dogs edit comp
   }

}



//   Only the service can change the array. Other components call its methods
   //   removeDog(index) {
   //     this.dogs.splice(index, 1);
   //   }

   //   editDog(idx) {

   //   }
