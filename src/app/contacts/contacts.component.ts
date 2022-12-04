import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export default class ContactsComponent {
  contacts = [
    { icon: 'assets/location.png', subscribe: 'Gomel, Belarus', href: 'https://www.google.com/maps/@52.4173227,31.0904597,10.54z' },
    { icon: 'assets/github.png', subscribe: '@kate4ka007', href: 'https://github.com/Kate4ka007' },
    { icon: 'assets/gmail.png', subscribe: 'kate4ka0007@gmail.com', href: 'mailto:kate4ka0007@gmail.com' },
    { icon: 'assets/link.png', subscribe: 'Katsiaryna Shlemena', href: 'https://www.linkedin.com/in/katsiaryna-shlemena-142a60233/' },
    { icon: 'assets/tel.png', subscribe: '+375291663266', href: 'tel:+375291663266' },
    { icon: 'assets/teleg.png', subscribe: '@kate4ka007', href: 'https://telegram.me/kate4ka007' },
  ];
}
