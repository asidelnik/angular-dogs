import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})

export class AppComponent {
   title = 'my first angular 2.0 adventure!';
   public dogName: string = 'Rex';
   public dogWeight: number;
   public ownerName: string;
   public dayDogPic: string;

   constructor() {
      this.dayDogPic = this.imageUrl();
   }
   
   imageUrl(): string{
      var hr = (new Date()).getHours();
      if (hr > 6 && hr < 20) {
         return 'http://imgsrv.wkdzradio.com/image/wkdz4/UserFiles/Image/Dog%20Day1.jpg';
      } else {
         return 'https://besthqwallpapers.com/Uploads/22-1-2018/37943/thumb2-4k-moon-dog-night-digital-art.jpg';
      }
   }
}

//   imageUrl: ';
