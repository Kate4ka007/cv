import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import AboutComponent from './about/about.component';
import SkillsComponent from './skills/skills.component';
import ContactsComponent from './contacts/contacts.component';
import EducationComponent from './education/education.component';
import ProjectsComponent from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ContactsComponent,
    EducationComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
