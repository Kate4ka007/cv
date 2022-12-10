import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export default class ProjectsComponent {
  projects = [
    { name: 'Project management', path: 'assets/rs-task.JPG', subscribe: 'angular, typescript, angular material, ng-zorro, team work' },
    { name: 'Youtube', path: 'assets/rs-youtube2.JPG', subscribe: 'angular, typescript, Rxjs, NgRx,youtube data api, ng-zorro' },
    { name: 'RS-lang', path: 'assets/rs-lang.JPG', subscribe: 'angular, typescript, angular material, team work' },
  ];

  projects_two = [
    { name: 'Online-Store', path: 'assets/rs-online-store.JPG', subscribe: 'html, scss, typescript, webpack' },
    { name: 'Shelter', path: 'assets/rs-shelter.JPG', subscribe: 'html, scss, javascript, pixel perfect' },
  ];
}
