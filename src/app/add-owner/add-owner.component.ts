import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.scss']
})
export class AddOwnerComponent implements OnInit {
   ownerName: string = 'John';
   ownerAge: number = 35;
   dogLicense: boolean = false;

  constructor() { }

  ngOnInit() {}

}
