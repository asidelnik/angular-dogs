import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-add-dog',
   templateUrl: './add-dog.component.html',
   styleUrls: ['./add-dog.component.scss']
})

export class AddDogComponent implements OnInit {
   title: string = 'AngularDogs';
   dogName: string; // = 'Rex';
   dogWeight: number; // = 35;
   ownerName: string; // = 'John';
   imageUrl: string;

   constructor() {
      var currentDate = new Date();
      if (currentDate.getHours() > 21 && currentDate.getHours() <= 6) {
         this.imageUrl = 'https://besthqwallpapers.com/Uploads/22-1-2018/37943/thumb2-4k-moon-dog-night-digital-art.jpg';
      }
      else {
         this.imageUrl = 'http://imgsrv.wkdzradio.com/image/wkdz4/UserFiles/Image/Dog%20Day1.jpg';
      }
   }

   ngOnInit() {
   }

}
