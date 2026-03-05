import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  menuValue!: boolean;

  employees = [
    {
      name: 'Dr. Rizan Andra Corina - medic specialist stomatologie generală',
      photo: 'assets/Corina2.PNG',
      description: 'Medic specialist în stomatologie generală, dedicat, pasionat de sănătatea orală și de starea de bine a pacienților mei. Mă preocup nu doar de dantura acestora, ci și de confortul și echilibrul lor psihic, creând un mediu plăcut și relaxant. Îmi place să salvez și să restaurez dinții, asigurându-le atât funcționalitate, cât și estetică. Investesc constant în perfecționarea mea profesională pentru a oferi cele mai bune soluții personalizate și cele mai moderne tratamente.'
    },
    {
      name: 'Dr. Alex Ciupitu - medic specialist stomatologie generală',
      photo: 'assets/Alex.jpeg',
      description: 'Pentru mine, stomatologia este mai mult decât o profesie — este un dialog subtil între știință și grijă, între estetică și echilibru interior. Privesc sănătatea orală ca parte din armonia întregului trup, o expresie a stării noastre de bine și a încrederii în sine. Fiecare pacient este unic, iar fiecare zâmbet are propria poveste. Mă ghidez după empatie, răbdare și dorința sinceră de a reda nu doar funcția, ci și frumusețea naturală a fiecărui zâmbet. Cred cu tărie că adevăratul profesionalism înseamnă nu doar precizie și competență, ci și capacitatea de a vedea omul dincolo de tratament — de a trata cu inimă, nu doar cu mâini.'
    },
    {
      name: 'Dr. Denisa Elena Baltaretu medic stomatolog/implantolog',
      photo: 'assets/image.png',
      description: 'Specializată în fațetele dentare, lucrări complexe de zirconiu, implanturi dentare și reabilitări complete de arcade maxilare. Inovația și perfecțiunea definesc munca sa.'
    }
  ];

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private headerService: HeaderService
  ) {
    this.titleService.setTitle('Despre Noi - ZenDent');
    this.metaService.addTags([
      { name: 'description', content: 'Aflați mai multe despre ZenDent, echipa noastră experimentată și angajamentul nostru de a oferi îngrijire dentară de înaltă calitate pacienților noștri.' },
      { name: 'keywords', content: 'despre noi, clinică dentară, întâlniți echipa noastră, profesioniști dentari' },
      { name: 'author', content: 'ZenDent' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  ngOnInit() {
    this.headerService.menuValue$.subscribe(value => this.menuValue = value);
  }
}
