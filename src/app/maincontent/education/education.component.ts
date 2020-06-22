import { Component, OnInit } from '@angular/core';
import { profile } from 'src/model/profile-content';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationPartTitle = profile.mainContent.education.educationPartTitle;
  educationPart1 = profile.mainContent.education.educationPart1;
  educationPart2 = profile.mainContent.education.educationPart2;
  constructor() { }

  ngOnInit(): void {
  }

}
