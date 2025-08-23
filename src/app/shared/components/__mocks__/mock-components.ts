import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'z-button',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class MockZardButtonComponent {}

@Component({
  selector: 'z-select',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class MockZardSelectComponent {}

@Component({
  selector: 'z-select-item',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class MockZardSelectItemComponent {}

@Component({
  selector: 'z-card',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class MockZardCardComponent {}

@Component({
  selector: 'z-avatar',
  template: '<div></div>',
  standalone: true
})
export class MockZardAvatarComponent {
  @Input() zImage: any;
  @Input() zShape: string = '';
}

@Component({
  selector: 'z-date-picker',
  template: '<div></div>',
  standalone: true
})
export class MockZardDatePickerComponent {
  @Input() zType: string = '';
  @Input() value: Date | null = null;
  @Input() placeholder: string = '';
  @Input() buttonClass: string = '';
  @Output() dateChange = new EventEmitter<Date | null>();
}

@Component({
  selector: 'z-badge',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class MockZardBadgeComponent {}

@Component({
  selector: '[z-input]',
  template: '',
  standalone: true
})
export class MockZardInputDirective {}

@Component({
  selector: '[z-tooltip]',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class MockZardTooltipDirective {
  @Input() zTooltip: string = '';
  @Input() zPosition: string = '';
}