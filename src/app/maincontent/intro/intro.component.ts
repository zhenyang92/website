import { Component, OnInit } from '@angular/core';
import { profile } from 'src/model/profile-content';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  introTitle = profile.mainContent.introTitle;
  intro = profile.mainContent.intro;


  constructor() {}

  ngOnInit(): void {}
}
