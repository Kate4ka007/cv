import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export default class ContactsComponent {
  contacts = [
    { icon: 'assets/location.png', subscribe: 'Gomel, Belarus' },
    { icon: 'assets/github.png', subscribe: '@kate4ka007' },
    { icon: 'assets/gmail.png', subscribe: 'kate4ka0007@gmail.com' },
    { icon: 'assets/link.png', subscribe: 'Katsiaryna Shlemena' },
    { icon: 'assets/tel.png', subscribe: '+375291663266' },
    { icon: 'assets/teleg.png', subscribe: '@kate4ka007' },
  ];
}
