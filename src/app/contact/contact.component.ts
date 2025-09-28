import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  menuValue!: boolean;

  options: google.maps.MapOptions = {
    mapId: "ZenDent_MAP_ID",
    center: {
      lat: 44.317574804409624,
      lng: 23.798574686029713
    },
    zoom: 17,
  };

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private headerService: HeaderService
  ) {
    this.titleService.setTitle('Contactați-ne - ZenDent');
    this.metaService.addTags([
      { name: 'description', content: 'Luați legătura cu ZenDent. Găsiți informațiile noastre de contact, locația și programați o întâlnire pentru nevoile dvs. de îngrijire dentară.' },
      { name: 'keywords', content: 'contactați-ne, clinică dentară, programare, îngrijire dentară, locație' },
      { name: 'author', content: 'ZenDent' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  ngOnInit() {
    this.headerService.menuValue$.subscribe(value => this.menuValue = value);
  }
}
