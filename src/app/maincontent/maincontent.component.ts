import { Component, OnInit } from '@angular/core';
import { profile } from 'src/model/profile-content';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss'],
})
export class MaincontentComponent implements OnInit {
  mainTitle = profile.mainContent.mainTitle;
  introTitle = profile.mainContent.introTitle;
  intro = profile.mainContent.intro;
  researchExpPartTitle = profile.mainContent.researchExpPartTitle;
  researchExpPartContent = profile.mainContent.researchExpPartContent;
  teachingExpPartTitle = profile.mainContent.teachingExpPartTitle;
  teachingExpPartContent = profile.mainContent.teachingExpPartContent;
  honorsPartTitle = profile.mainContent.honorsPartTitle;
  honorsPartContent = profile.mainContent.honorsPartContent;
  publicationsPartTitle = profile.mainContent.publicationsPartTitle;
  publicationsPartContent = profile.mainContent.publicationsPartContent;
  conferencePartTitle = profile.mainContent.conferencePartTitle;
  conferencePartContent = profile.mainContent.conferencePartContent;
  email = profile.email;
  emailAdress = 'mailto:' + this.email;
  faEnvelope = faEnvelope;
  faDownload = faDownload;
  constructor() {}

  ngOnInit(): void {}
}
