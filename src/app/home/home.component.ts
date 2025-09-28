import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menuValue!: boolean;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private headerService: HeaderService
  ) {
    this.titleService.setTitle('Stomatologie Craiova - ZenDent | Clinica ta dentară de încredere');
    this.metaService.updateTag({ name: 'description', content: 'ZenDent - Clinica de stomatologie din Craiova oferă servicii dentare profesionale: detartraj, albire dentară, tratamente carii. Zâmbetul tău contează!' });
    this.metaService.updateTag({ name: 'keywords', content: 'zendent Craiova, zen dent Craiova, stomatologie Craiova, clinica dentară Craiova, dentist bun Craiova, detartraj Craiova, albire dentară Craiova, stomatolog aproape de mine craiova, detartraj pret craiova' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    // this.metaService.addTags([
    //   { name: 'description', content: 'Descoperiți îngrijirea dentară excepțională la ZenDent Craiova. Oferim o gamă de servicii pentru a menține zâmbetul dvs. sănătos și frumos.' },
    //   { name: 'keywords', content: `
    //     stomatologie,
    //     îngrijire dentară,
    //     sănătate orală,
    //     dentist de familie,
    //     clinică dentară,
    //     stomatolog,
    //     dentist bun craiova,
    //     stomatologie copii,
    //     stomatologie Craiova,
    //     stomatologie Dolj,
    //     stomatologie non stop,
    //     cabinet dentist craiova,
    //     detartraj craiova,
    //     albire dentara craiova,
    //     tratamente carii craiova,
    //     proteze dentare craiova,
    //     urgente stomatologice craiova,
    //     dentist non-stop craiova,
    //     durere de dinti tratament craiova,
    //     stomatolog fara durere craiova,
    //     cabinet stomatologic modern craiova,
    //     dentist preturi accesibile craiova,
    //     stomatolog bun craiova,
    //     cel mai bun dentist in craiova,
    //     detartraj pret craiova,
    //     albire dentara cat dureaza,
    //     stomatolog aproape de mine craiova,
    //     dentist deschis acum craiova
    //   ` },
    //   { name: 'author', content: 'ZenDent' },
    //   { name: 'robots', content: 'index, follow' }
    // ]);
  }

  ngOnInit() {
    this.headerService.menuValue$.subscribe(value => this.menuValue = value);
  }
}
