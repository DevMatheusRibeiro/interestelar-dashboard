import { Component, signal } from '@angular/core';

import { ZardDatePickerComponent } from '../date-picker/date-picker.component';
import { ZardButtonComponent } from '../button/button.component';
import { ZardAvatarComponent } from '../avatar/avatar.component';
import { ZardInputDirective } from '../input/input.directive';
import { ZardBadgeComponent } from '../badge/badge.component';


@Component({
  selector: 'interestelar-header',
  imports: [
    ZardInputDirective,
    ZardDatePickerComponent,
    ZardButtonComponent,
    ZardAvatarComponent,
    ZardBadgeComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  protected readonly zImageDefault = {
    fallback: 'YS',
    url: '/png/yourself.png',
    alt: 'Yourself',
  };
  protected readonly selectedDate = signal<Date | null>(new Date());

  protected onDateChange(date: Date | null) {
    this.selectedDate.set(date);
  }
}
