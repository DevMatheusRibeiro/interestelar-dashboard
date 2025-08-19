import { Component, signal } from '@angular/core';

import { ZardDatePickerComponent } from '../date-picker/date-picker.component';
import { ZardButtonComponent } from '../button/button.component';
import { ZardAvatarComponent } from '../avatar/avatar.component';
import { ZardInputDirective } from '../input/input.directive';
import { ZardBadgeComponent } from '../badge/badge.component';


@Component({
  selector: 'interestelar-header',
  imports: [ZardInputDirective, ZardDatePickerComponent, ZardButtonComponent, ZardAvatarComponent, ZardBadgeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    selectedDate = signal<Date | null>(new Date());

  onDateChange(date: Date | null) {
    this.selectedDate.set(date);
    console.log('Selected date:', date);
  }

   readonly zImageDefault = {
    fallback: 'ZA',
    url: '/png/yourself.png',
    alt: 'ZadUI',
  };
}
