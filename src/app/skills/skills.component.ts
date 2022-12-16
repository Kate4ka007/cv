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
        'html/css/scss',
        'javascript',
        'typescript',
        'angular',
        'git, github',
        'rest api',
        'rxjs, ngrx',
        'responsive design',
        'webpack',
        'node.js',
        'nest.js, express',
        'GraphQL, docker',
        'figma',
        'oop',
        'angular materials, ng-zorro',
        'problem solving',
        'team work',
        'BEM',
      ],
    },
    {
      title: 'Other skills',
      skills: [
        'self-research',
        'communication',
        'time-management',
        'teamwork',
        'responsibility',
      ],
    },
    {
      title: 'languages',
      skills: ['english (B1-B2)', 'russian (native)', 'belorussian (native)'],
    },
    {
      title: 'work experience',
      skills: ['2012 - 2021 - State Committee of Forensic Examinations of the Republic Belarus, medical forensic expert', '2022 - freelance'],
    },
  ];
}
