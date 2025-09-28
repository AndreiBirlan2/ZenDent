import { Component } from '@angular/core';
import { HeaderService } from './header.service'; // Adjust the path accordingly

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuValue: boolean = false;
  menuIconClass: string = 'bi bi-list';

  constructor(private headerS: HeaderService) {}

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menuIconClass = this.menuValue ? 'bi bi-x' : 'bi bi-list';
    this.headerS.setMenuValue(this.menuValue); // Update service with new value
  }

  closeMenu() {
    this.menuValue = false;
    this.menuIconClass = 'bi bi-list';
    this.headerS.setMenuValue(this.menuValue); // Update service with new value
  }
}
