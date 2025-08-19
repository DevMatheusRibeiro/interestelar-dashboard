import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'interestelar-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboad-v1';
}
