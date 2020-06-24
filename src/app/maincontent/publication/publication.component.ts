import { Component, OnInit } from '@angular/core';
import { profile } from 'src/model/profile-content';
@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit {
  title = profile.mainContent.publications.title;
  articles = profile.mainContent.publications.articles;

  constructor() {}

  ngOnInit(): void {}
}
