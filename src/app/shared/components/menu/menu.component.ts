import { Component, output } from '@angular/core';

import { ZardButtonComponent } from '../button/button.component';
import { ZardAvatarComponent } from '../avatar/avatar.component';
import { ZardTooltipModule } from '../tooltip/tooltip';


@Component({
  selector: 'interestelar-menu',
  imports: [ZardButtonComponent, ZardAvatarComponent, ZardTooltipModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  protected readonly zImageDefault = {
    fallback: 'IE',
    url: '/png/interestelar.png',
    alt: 'Interestelar',
  };
  protected readonly closeMenu = output<void>();

  protected closeMobileMenu() {
    this.closeMenu.emit();
  }
}
