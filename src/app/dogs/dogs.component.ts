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
        this.dogsService.getDogs()
        this.dogsService.dogsObservable.subscribe((results) => {
            this.dogs = results;
        });

        this.route.queryParams.subscribe(queryParams => {
            this.filterTerm = queryParams.name;
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
        console.log("dogs.comp - walk:");
        console.log(walk);

        this.dogsService.addWalk(this.selectedDog, walk);
        this.dogsService.addScore(10);
    }
}