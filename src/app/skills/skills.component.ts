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
        'ajax',
        'dom manipulation',
        'responsive design',
        'webpack',
        'figma',
        'OOP',
        'github',
        'angular materials',
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
  ];
}
