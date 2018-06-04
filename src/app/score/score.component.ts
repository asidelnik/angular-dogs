import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
    public score: number;
    constructor(private dogsService: DogsService) { }

    ngOnInit() {
        this.dogsService.suscribeToSubject().subscribe((data) => {
            this.score = data;
            console.log(data)
        });
    }

    // ngOnDestroy() {
    //     this.dogsService.scoreUpdated.unsubscribe();
    // }
}
