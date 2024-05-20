import { Component } from '@angular/core';

@Component({
  selector: 'app-info-two',
  standalone: true,
  imports: [],
  templateUrl: './info-two.component.html',
  styleUrl: './info-two.component.css'
})
export class InfoTwoComponent {
  info1 = 'infoTwo - info 1'
  info2 = 'infoTwo - info 2'
}
