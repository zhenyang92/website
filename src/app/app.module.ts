import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { EducationComponent } from './maincontent/education/education.component';
import { MatIconModule } from '@angular/material/icon'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroComponent } from './maincontent/intro/intro.component';
import { TeachingComponent } from './maincontent/teaching/teaching.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MaincontentComponent,
    EducationComponent,
    IntroComponent,
    TeachingComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatIconModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
