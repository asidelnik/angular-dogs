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
  public dayDogPic: string = 'https://besthqwallpapers.com/Uploads/22-1-2018/37943/thumb2-4k-moon-dog-night-digital-art.jpg';
  public ownerName: string;
}

//   imageUrl: ';
