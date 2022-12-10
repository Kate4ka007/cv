import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export default class SkillsComponent {
  skillsGroups = [
    {
      title: 'working skills',
      skills: [
        'html & css',
        'javascript',
        'typescript',
        'angular',
        'scss',
        'git',
        'json',
        'rest api',
        'rxjs, ngrx',
        'responsive design',
        'webpack',
        'node.js',
        'nest.js',
        'GraphQL',
        'figma',
        'oop',
        'angular materials, ng-zorro',
        'problem solving',
      ],
    },
    {
      title: 'Other skills',
      skills: [
        'self-research',
        'communication',
        'time-management',
        'teamwork',
        'creativity',
      ],
    },
    {
      title: 'languages',
      skills: ['english (B1)', 'russian (native)', 'belorussian (native)'],
    },
    {
      title: 'work experience',
      skills: ['2012 - 2021 - State Committee of Forensic Examinations of the Republic Belarus, medical forensic expert', '2022 - freelance'],
    },
  ];
}
