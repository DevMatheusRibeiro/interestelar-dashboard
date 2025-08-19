import { ZardDatePickerComponent } from '@shared/components/date-picker/date-picker.component';
import { ZardCardComponent } from '@shared/components/card/card.component';
import { Component, signal } from '@angular/core';

import { ZardButtonComponent } from './../../shared/components/button/button.component';


@Component({
  selector: 'interestelar-dashboard',
  imports: [ZardButtonComponent, ZardDatePickerComponent, ZardCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
selectedDate = signal<Date | null>(null);

  onDateChange(date: Date | null) {
    this.selectedDate.set(date);
    console.log('Selected date:', date);
  }
}
