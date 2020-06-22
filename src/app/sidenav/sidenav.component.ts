import { Component, OnInit } from '@angular/core';
import { profile } from 'src/model/profile-content';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  name = profile.sideNavContent.name;
  intro1 = profile.sideNavContent.intro1;
  intro2 = profile.sideNavContent.intro2;
  constructor() {
  }

  ngOnInit(): void {
  }

}
