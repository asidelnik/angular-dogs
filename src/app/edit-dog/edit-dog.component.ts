import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
   selector: 'app-edit-dog',
   templateUrl: './edit-dog.component.html',
   styleUrls: ['./edit-dog.component.scss']
})
export class EditDogComponent implements OnInit {
   //dogs = new Array<Dog>();
   chosenDog: Dog;
   param: number;
   dog: Dog = new Dog();

   constructor(private dogsService: DogsService, private route: ActivatedRoute) {
      
   }
   

   ngOnInit() {
      this.route.params.subscribe(params => {
         this.param = params.id;
         this.chosenDog = this.dogsService.getDog(this.param);
         // console.log("the id parameter is: " + this.param);
         // console.log("this.chosen: ");
         // console.log(this.chosenDog);
      });
   }

   servEditDog(id) {
      this.dogsService.editDog(this.param, this.chosenDog);
   }
}