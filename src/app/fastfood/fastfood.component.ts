import { Component } from '@angular/core';

@Component({
  selector: 'app-fastfood',
  templateUrl: './fastfood.component.html',
  styleUrls: ['./fastfood.component.css']
})
export class FastfoodComponent {
  products = [
    { name: 'Hamburger', image: 'assets/img/burger.jpg', price: '1500 Fcfa' },
    { name: 'Chawarma', image: 'assets/img/chawarma.jpg', price: '1000 Fcfa' }
  ];

}
