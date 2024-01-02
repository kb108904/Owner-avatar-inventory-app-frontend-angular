import { Component } from '@angular/core';
import { ItemFormComponent } from '../item-form/item-form.component';
import { ItemsDisplayComponent } from '../items-display/items-display.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ItemFormComponent, ItemsDisplayComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
