import { Component, OnInit } from '@angular/core';
import { profile } from 'src/model/profile-content';
@Component({
  selector: 'app-honors',
  templateUrl: './honors.component.html',
  styleUrls: ['./honors.component.css'],
})
export class HonorsComponent implements OnInit {
  title = profile.mainContent.honorsAndAwards.title;
  honors = profile.mainContent.honorsAndAwards.honors;
  constructor() {}

  ngOnInit(): void {}
}
