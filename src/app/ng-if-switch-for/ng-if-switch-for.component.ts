import { Component } from '@angular/core';
import {NgIf , NgSwitch ,NgFor, NgSwitchCase, NgSwitchDefault} from "@angular/common";

@Component({
  selector: 'app-ng-if-switch-for',
  standalone: true,
  imports: [NgIf,NgSwitch,NgFor, NgSwitchCase, NgSwitchDefault],
  templateUrl: './ng-if-switch-for.component.html',
  styleUrl: './ng-if-switch-for.component.css'
})
export class NgIfSwitchForComponent {
  condition: boolean=true;
     
    toggle(){
        this.condition=!this.condition;
    }
    items =["Tom", "Bob", "Sam", "Bill"]
    count = 5;
}
