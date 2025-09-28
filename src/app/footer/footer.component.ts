import { Component } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  menuValue!: boolean;

  constructor(private headerS: HeaderService) {}

  ngOnInit() {
    this.headerS.menuValue$.subscribe(value => {
      this.menuValue = value;
    });
  }
}
