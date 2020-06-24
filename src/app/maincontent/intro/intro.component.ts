import { Component, OnInit } from '@angular/core';
import { profile } from 'src/model/profile-content';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  introTitle = profile.mainContent.introTitle;
  intro = profile.mainContent.intro;
  email = profile.email;
  emailAdress = 'mailto:' + this.email;
  faEnvelope = faEnvelope;
  faDownload = faDownload;
  constructor() {}

  ngOnInit(): void {}
}
