import { Component } from '@angular/core';

@Component({
  selector: 'app-petit-dejeuner',
  templateUrl: './breackfast.component.html',
  styleUrls: ['./breackfast.component.css']
})
export class BreackfastComponent {
  products = [
    { name: 'Café au Lait', image: 'assets/img/cafe-au-lait.jpg', price: '250 Fcfa', id: 1 },
    { name: 'Café noir', image: 'assets/img/cafenoir.jpg', price: '100 Fcfa' },
    { name: 'Chocolat chaud', image: 'assets/img/chocolatchaud.jpg', price: '300 Fcfa' },
    { name: 'Pain au Chocolat', image: 'assets/img/pain-au-chocolat.jpg', price: '500 Fcfa' },
  ];

}

