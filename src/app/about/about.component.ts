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
      name: 'Dr. Rizan Andra Corina',
      photo: 'assets/Corina2.PNG',
      description: 'Medic specialist în stomatologie generală, dedicat, pasionat de sănătatea orală și de starea de bine a pacienților mei. Mă preocup nu doar de dantura acestora, ci și de confortul și echilibrul lor psihic, creând un mediu plăcut și relaxant. Îmi place să salvez și să restaurez dinții, asigurându-le atât funcționalitate, cât și estetică. Investesc constant în perfecționarea mea profesională pentru a oferi cele mai bune soluții personalizate și cele mai moderne tratamente.'
    },
    {
      name: 'Dr. Roxana Lăcrămioara Groza',
      photo: 'assets/Roxana1.PNG',
      description: 'Medic stomatolog generalist cu pasiune pentru sănătatea dentară și o abordare empatică. Mă dedic să îți rezolv orice problemă dentară, oferindu-ți tratamente personalizate și o experiență plăcută, fără stres. Cred că fiecare zâmbet merită să fie sănătos și încrezător, iar scopul meu este să îți aduc înapoi zâmbetul cu profesionalism și grijă. Cu răbdare și atenție, îți voi oferi cele mai bune soluții pentru un confort pe termen lung.'
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
