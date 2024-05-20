import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoOneComponent } from './info-one/info-one.component'
import {InfoPhotoComponent} from './info-photo/info-photo.component'
import {InfoTwoComponent} from './info-two/info-two.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfoOneComponent,InfoPhotoComponent,InfoTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PersonaleInfo';
}
