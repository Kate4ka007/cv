import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export default class ProjectsComponent {
  projects = [
    { name: 'RS-lang', path: '', subscribe: '' },
    { name: 'Online-Store', path: '', subscribe: '' },
    { name: 'Shelter', path: '', subscribe: '' },
    { name: 'Virtual-keyboard', path: '', subscribe: '' },
  ];
}
