import { Component } from '@angular/core';

import { ZardButtonComponent } from '../button/button.component';
import { ZardAvatarComponent } from '../avatar/avatar.component';


@Component({
  selector: 'interestelar-menu',
  imports: [ZardButtonComponent, ZardAvatarComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
 readonly zImageDefault = {
    fallback: 'IT',
    url: '/png/interestelar.png',
    alt: 'Interestelar',
  };
}
