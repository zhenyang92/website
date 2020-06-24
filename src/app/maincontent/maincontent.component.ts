import { Component, OnInit } from '@angular/core';
import { profile } from 'src/model/profile-content';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss'],
})
export class MaincontentComponent implements OnInit {
  mainTitle = profile.mainContent.mainTitle;

  researchExpPartTitle = profile.mainContent.researchExpPartTitle;
  researchExpPartContent = profile.mainContent.researchExpPartContent;

  honorsPartTitle = profile.mainContent.honorsPartTitle;
  honorsPartContent = profile.mainContent.honorsPartContent;
  conferencePartTitle = profile.mainContent.conferencePartTitle;
  conferencePartContent = profile.mainContent.conferencePartContent;

  constructor() {}

  ngOnInit(): void {}
}
