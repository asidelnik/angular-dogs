import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogsService } from '../dogs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-edit-dog',
    templateUrl: './edit-dog.component.html',
    styleUrls: ['./edit-dog.component.scss']
})
export class EditDogComponent implements OnInit {

    dog: Dog;

    constructor(private dogsService: DogsService, private route: ActivatedRoute, private router: Router) { }


    ngOnInit() {
        this.route.params.subscribe(params => {
            this.dogsService.dogsObservable.subscribe((results) => {
                this.dog = results.find((dog) => dog.id == params.id);
            });
        })
    }

    updateDog() {
        var existingDogIndex = this.dogsService.dogsObservable.subscribe((results) => {
            let index = results.findIndex((currentDog) => currentDog.id == this.dog.id);
            this.dogsService.updateDog(index, this.dog);
        });



        this.router.navigate(['/']);
    }
}





// ngOnInit() {

//     // getDog(id: number): Dog {
//     //     return this.dogsObservable.subscribe((results) => {
//     //         let dogs = results;
//     //         return dogs.find((dog) => dog.id == id);
//     //     });
//     // }
//     this.route.params.subscribe(params => {
//         this.dogsService.dogsObservable.subscribe((results) => {
//             //         let dogs = results;
//             this.dog = results.find((dog) => dog.id == params.id);

//             // this.dogsService.getDog(params.id);
//         });
//     }