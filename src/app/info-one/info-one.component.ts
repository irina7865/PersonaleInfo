import { Component } from '@angular/core';

@Component({
  selector: 'app-info-one',
  standalone: true,
  imports: [],
  templateUrl: './info-one.component.html',
  styleUrl: './info-one.component.css'
})
export class InfoOneComponent {
  info1 = 'infoOne - info 1'
  info2 = 'infoOne - info 2'
  info3 = 'infoOne - info 3'
}
