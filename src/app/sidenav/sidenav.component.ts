import { Component, OnInit } from '@angular/core';
import { profile } from 'src/model/profile-content';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  name = profile.sideNavContent.name;
  intro1 = profile.sideNavContent.intro1;
  intro2 = profile.sideNavContent.intro2;
  faEnvelope = faEnvelope;
  faDownload = faDownload;
  faGithub = faGithub;
  email = profile.email;
  emailAdress = 'mailto:' + this.email;
  constructor() {
  }

  ngOnInit(): void {
  }

}
