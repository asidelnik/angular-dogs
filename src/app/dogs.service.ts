import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from './dog';
import Walk from './walk';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const DOGS = [
    { id: 0, name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21), owner: 'Jack Daniels', walks: [] },
    { id: 1, name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12), owner: 'Mike Perry', walks: [] },
    { id: 2, name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6), owner: 'Sarah Abrahamson', walks: [] },
    { id: 3, name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15), owner: 'Lara Croft', walks: [] },
    { id: 4, name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4), owner: 'Jerry Seinfeld', walks: [] }
];

@Injectable()
export class DogsService {

    score: number = 0;
    dogsCount: number = 0;
    private scoreSubject: Subject<number>;
    public scoreUpdated: Observable<number>;

    public dogCountSubject: Subject<number>;
    public dogCountUpdated: Observable<number>;

    public dogsSubject: Subject<Dog[]>;
    public dogsObservable: Observable<Dog[]>;


    constructor(private http: HttpClient) {
        this.scoreSubject = new Subject<number>();
        this.scoreUpdated = this.scoreSubject.asObservable();

        this.dogCountSubject = new Subject<number>();
        this.dogCountUpdated = this.dogCountSubject.asObservable();

        this.dogsSubject = new Subject<Dog[]>();                // array
        this.dogsObservable = this.dogsSubject.asObservable();      // observable - listener, when next is used, methods, subscribed to the observable, get notified. Only the service can change the array by calling .next()
    }

    getDogs(): void {  //: Observable<Dog[]> 
        this.http.get<Dog[]>('/api/dogs').subscribe((data) => {  // this .subscribe is different to the observable subscribe
            // console.log("service - data:");
            // console.log(data);
            this.dogsObservable = this.dogsSubject.asObservable();
            console.log(this.dogsObservable);
            
            this.dogsSubject.next(data);

            this.dogsCount = data.length;
        })
        // console.log("service - this.dogsSubject:");
        // console.log(this.dogsSubject);
    }

    updateDog(dog: Dog) {
        // this.http.put<Dog[]>()
        this.http.put<any>('/api/dogs/' + dog.id, dog).subscribe((data) => {
            //data = dog object
            this.getDogs();
        })
    }

    addDog(dog: Dog) {
        this.http.post<any>('/api/dogs/' + dog.id, dog).subscribe((data) => {
            this.getDogs();
        })
    }

    removeDog(id) {
        this.http.delete<number>('/api/dogs/' + id).subscribe((data) => {
            this.getDogs();
        })
    }

    addWalk(dog: Dog, walk: Walk) {
        dog.walks.push(walk);
    }

    addScore(increment) {
        this.score += increment;
        this.scoreSubject.next(this.score);
    }

    getScore() {
        return this.score;
    }

    getDogsCount() {
        return this.dogsCount;
    }

}



        // how to update server/api/http array?
        //DOGS[existingDogIndex] = dog;  // sort of replace


 // getDogs(): Dog[] {
    //     return DOGS;
    // }

        // updateDog(index: number, dog: Dog) {
        //     DOGS[existingDogIndex] = dog;  // sort of replace
        //     var existingDogIndex = this.dogsObservable.subscribe((results) => {
        //         return results.findIndex((dog) => dog.id == id);
        //     });
        //     this.dogsObservable.findIndex((dog) => dog.id == id);
        //     sort of replace
        // }


        // this.getDogsSubject = this.http.get<Dog[]>('/api/dogs');
        // this.getDogsSubject.next();

        //return this.http.get<Dog[]>('/api/dogs');
        // return this.getdogsObservable = this.http.get<Dog[]>('/api/dogs');
        // this.getDogsSubject.next();
        //return array
        // return getDogsSubject.asObservable();


    // addDog(dog: Dog) {
    //     dog.id = this.getDogs().length + 1;
    //     DOGS.push(dog);
    // }



    // getDog(id: number) {
    //     return this.getDogs().find((dog) => dog.id == id);
    // }

    // dogsObservable.subscribe((results) => {
    //     this.dogs = results;
    // });

    // getDog(id: number): Dog {
    //     return this.dogsObservable.subscribe((results) => {
    //         let dogs = results;
    //         return dogs.find((dog) => dog.id == id);
    //     });
    // }