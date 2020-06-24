import { Component, OnInit } from '@angular/core';
import { profile } from 'src/model/profile-content';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css'],
})
export class TeachingComponent implements OnInit {
  title = profile.mainContent.teachingExp.title;
  teachingExperiences = profile.mainContent.teachingExp.exp;
  constructor() {}

  ngOnInit(): void {}
}
