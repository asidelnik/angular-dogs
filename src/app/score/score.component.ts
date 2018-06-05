import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

    score: number = 0;
    dogsCount: number;

    constructor(private dogsService: DogsService) { }

    ngOnInit() {
        // this.score = this.dogsService.getScore();
        // this.dogsCount = this.dogsService.getDogsCount();

        this.dogsService.dogsObservable.subscribe((results) => {
            this.dogsCount = results.length;
        });

        this.dogsService.scoreUpdated.subscribe((results) => {
            this.dogsCount = results;
        });

    }
}
