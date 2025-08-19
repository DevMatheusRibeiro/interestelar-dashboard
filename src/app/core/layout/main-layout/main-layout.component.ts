import { HeaderComponent } from '@shared/components/header/header.component';
import { MenuComponent } from '@shared/components/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'interestelar-main-layout',
  imports: [RouterOutlet, MenuComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
