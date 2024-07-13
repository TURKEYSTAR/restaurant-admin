import { Component } from '@angular/core';

@Component({
  selector: 'app-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent {
  products = [
    { name: 'Boissons gazeuses', image: 'assets/img/gaz.jpg', price: '350 Fcfa' },
    { name: 'Jus locaux', image: 'assets/img/nature.jpg', price: '300 Fcfa' },
    { name: 'Eau', image: 'assets/img/eau.jpg', price: '250 Fcfa' }
  ];

}
