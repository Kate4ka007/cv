import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    { name: 'RS-lang', path: '', subscribe: '' },
    { name: 'Online-Store', path: '', subscribe: '' },
    { name: 'Shelter', path: '', subscribe: '' },
    { name: 'Virtual-keyboard', path: '', subscribe: '' },
];

  constructor() {}

  ngOnInit(): void {}
}
