import { Component } from '@angular/core';
import { CurrencyPipe, PercentPipe } from "@angular/common"

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CurrencyPipe,PercentPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  money: number = 0.5423;
}
