import { Component, OnInit, OnDestroy } from '@angular/core';

import { DogsService } from '../dogs.service';
import { Dog } from '../dog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-dogs',
    templateUrl: './dogs.component.html',
    styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

    selectedDog: Dog;
    dogs = new Array<Dog>();
    filterTerm: string = "";
    dateFormat = 'fullDate'


    constructor(private dogsService: DogsService, private route: ActivatedRoute, private router: Router) {
        //this.dogs = dogsService.getDogs();


    }

    ngOnInit() {
        this.setDogs();
        // this.dogsService.getDogs()
        // this.dogsService.dogsObservable.subscribe((results) => {
        //     this.dogs = results;
        // });

        // this.dogsService.getDogs().subscribe((results) => {
        //     this.dogs = results;
        // });

        this.route.queryParams.subscribe(queryParams => {
            this.filterTerm = queryParams.name;
        });
    }

    setDogs() {
        this.dogsService.dogsObservable.subscribe((dogsArray) => {
            this.dogs = dogsArray;
            console.log(this.dogs);
            console.log(dogsArray);
            
            
        });
    }

    onFilterChanged(filterString) {
        this.router.navigate(['.'], { queryParams: { name: filterString } });
    }

    removeDog(id) {
        this.dogsService.removeDog(id);
    }

    toggleDate() {
        this.dateFormat == 'fullDate' ? this.dateFormat = 'shortDate' : this.dateFormat = 'fullDate';
    }

    selectDog(dog) {
        this.selectedDog = dog;
    }

    handleAddWalk(walk) {
        this.dogsService.addWalk(this.selectedDog, walk);
        this.dogsService.addScore(10);
    }
}




// this.dogsService.getDogs().subscribe((results) => {
        //     this.dogs = results;
        // });        

            // removeDog(id) {
    //     this.dogsService.removeDog(id);
    //     this.dogsService.dogCountSubject.next();
    // }


            // .subscribe((response) => {            
        //     this.dogs = response;
        // });