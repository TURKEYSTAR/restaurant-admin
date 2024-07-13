import { Component } from '@angular/core';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent {
  products = [
    { name: 'Thiebou djeun', image: 'assets/img/thieb2.jpg', price: '800 Fcfa' },
    { name: 'Yassa Poulet', image: 'assets/img/yassa2.jpg', price: '1000 Fcfa' }
  ];

}
