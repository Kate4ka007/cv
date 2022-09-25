import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export default class EducationComponent {
  education = [
    { name: 'Rollings Scopes School', subscribe: 'Angular, from September 2022 to the present' },
    { name: 'Rollings Scopes School', subscribe: 'JavaScript/Front-end, March 2022 - September 2022' },
    { name: 'Vitebsk State Medical University', subscribe: 'General Medicine, 2006 - 2012' },
  ];
}
