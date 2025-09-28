import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  menuValue!: boolean;


  constructor(
    private titleService: Title,
    private metaService: Meta,
    private headerService: HeaderService
  ) {
    this.titleService.setTitle('Servicii Dentare - ZenDent');
    this.metaService.addTags([
      { name: 'description', content: 'Explorați gama noastră variată de servicii dentare, inclusiv curățări, albiri și implanturi la ZenDent. Programați-vă astăzi!' },
      { name: 'keywords', content: `
        servicii dentare,
        curățare dinți,
        implanturi dentare,
        stomatologie estetică,
        ortodonție,
        Consultație,
        plan tratament,
        cancer oral screen,
        Modele de studiu,
        Obturație compozit dinte frontal,
        Obturație compozit dinte lateral simplă,
        Obturație compozit dinte lateral complexă,
        Obturație compozit leziune colet,
        Obturație cu material glass-ionomer,
        Reconstrucție bont protetic cu pivot fibră de sticlă,
        Coafaj indirect/direct,
        Fațetare directă compozit/dinte,
        Fluorizare ambele arcade,
        Sigilare dentară,
        Obturație glass-ionomer dinte temporar,
        Obturație canal dinte temporar,
        obturație coronară definitivă,
        Drenaj endodontic dinte temporar, Menținător de spațiu fix,
        Tratament de urgență drenaj endodontic/pansament calmant,
        Tratament mecanico-antiseptic incisiv/canin,
        Tratament mecanico-antiseptic premolar,
        Tratament mecanico-antiseptic molar,
        Obturație endodontică incisiv/canin,
        Obturație endodontică premolar, Obturație endodontică molar,
        Retratament monoradicular, Retratament pluriradicular,
        Tratamentul gangrenei pulpare cu hidroxid de calciu,
        Ședință intermediară tratament endodontic,
        revelator de placă, Detartraj + periaj dentar profesional,
        Airflow, Pachet complet igienizare (detartraj, periaj, Airflow, fluorizare),
        Albire profesională cu lampă foto, Albire profesională cu lampă albire,
        Albire profesională cu laser, Coroană mixtă tip Weiser ceramică, Coroană mixtă metalo-acrilat,
        Coroană metalo-ceramică (one body), Coroană metalo-ceramică stratificată, Coroană zirconiu monolitic,
        Fațetă integral ceramică, Coroană provizorie laborator (PMMA), Proteză acrilică parțială/totală, Dispozitiv corono-radicular,
        Proteză scheletată cu sisteme speciale, Extracție dinte monoradicular, Extracție dinte pluriradicular,
        Extracție molar de minte, Extracție cu alveolotomie, Extracție dinte mobil, Extracție dinte temporar, Premolarizare molar,
        Tratamentul hemoragiei/alveolitei post-extracționale/pericoronaritei cu lavaje, Tratamentul pericoronaritelor cu decapușonare,
        Incizie și drenaj abces dinte definitiv, Frenectomie (fren labial)
      ` },
      { name: 'author', content: 'ZenDent' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  ngOnInit() {
    this.headerService.menuValue$.subscribe(value => this.menuValue = value);
  }
}
