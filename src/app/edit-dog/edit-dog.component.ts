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
   dogs = new Array<Dog>();
   dog: Dog = new Dog();

   constructor(private dogsService: DogsService, private route: ActivatedRoute) {
      this.dogs = dogsService.getDogs();
   }
   

   ngOnInit() {
      this.route.params.subscribe(params => {
         console.log("the id parameter is: " + params.id);
      });
   }

   servEditDog(id) {
      this.dogsService.editDog(id, this.dog);
   }
}