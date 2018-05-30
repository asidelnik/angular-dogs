import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';



@Component({
   selector: 'app-dogs',
   templateUrl: './dogs.component.html',
   styleUrls: ['./dogs.component.scss']
})

export class DogsComponent implements OnInit {

   dogs = new Array<Dog>();
   dateFormat: string = 'fullDate';
   selectedDogName: string;
   filteredDogs = new Array<Dog>();

   constructor(private dogsService: DogsService, private route: ActivatedRoute) {
      this.dogs = dogsService.getDogs();
   }

   ngOnInit() {
      this.route.queryParams.subscribe(queryParams => {
         console.log("name query param is: " + queryParams.name)
         if(queryParams.name){
            this.selectedDogName = queryParams.name;
            this.showSelected();
         }

 
      });
   }

   servRemoveDog(index) {
      this.dogsService.removeDog(index);
   }

   toggleDate() {
      this.dateFormat == 'fullDate' ? this.dateFormat = 'shortDate' : this.dateFormat = 'fullDate';
   }

   // Don't use the service - I am not getting data from it, just filtering the data I have.
   // showSelected() {
   //    this.dogs = this.dogsService.showSelected(this.selectedDogName);
   // }

   showSelected() {
      this.dogs = this.dogsService.getDogs();
      this.filteredDogs = new Array<Dog>(); 


      for(var i = 0; i < this.dogs.length; i ++){
         var aDog = this.dogs[i];
         if(aDog.name.includes(this.selectedDogName)){
            this.filteredDogs.push(aDog);
         }
      }
      this.dogs = this.filteredDogs;

      console.log(this.filteredDogs);
   }
}



//   Only the service can change the array. Other components call its methods
   //   removeDog(index) {
   //     this.dogs.splice(index, 1);
   //   }

   //   editDog(idx) {

   //   }
