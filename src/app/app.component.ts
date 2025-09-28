import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ZenDent';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const jsonLD = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Clinica Dentară ZenDent Craiova",
      "image": "https://zendent.ro/assets/clinic-image.jpg",
      "description": "Clinica ZenDent din Craiova oferă servicii stomatologice premium: detartraj, albire dentară, tratamente carii.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Strada Olteț, nr 11",
        "addressLocality": "Craiova",
        "postalCode": "200395",
        "addressCountry": "RO"
      },
      "telephone": "+40767043161",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Saturday",
            "Sunday"
          ],
          "opens": "10:00",
          "closes": "14:00"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 44.317574804409624,
        "longitude": 23.798574686029713
      }
    };

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLD);
    this.renderer.appendChild(document.head, script);
  }
}
