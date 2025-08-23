import { ZardDatePickerComponent } from '@shared/components/date-picker/date-picker.component';
import { ZardSelectItemComponent } from '@shared/components/select/select-item.component';
import { ZardSelectComponent } from '@shared/components/select/select.component';
import { ZardCardComponent } from '@shared/components/card/card.component';
import { Component, signal } from '@angular/core';

import { ZardButtonComponent } from './../../shared/components/button/button.component';


@Component({
  selector: 'interestelar-dashboard',
  imports: [ZardButtonComponent, ZardSelectComponent, ZardSelectItemComponent, ZardCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {}
