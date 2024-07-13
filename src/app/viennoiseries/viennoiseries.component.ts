import { Component } from '@angular/core';

@Component({
  selector: 'app-viennoiseries',
  templateUrl: './viennoiseries.component.html',
  styleUrls: ['./viennoiseries.component.css']
})
export class ViennoiseriesComponent {
  products = [
    { name: 'Cake', image: 'assets/img/cake.jpg', price: '150 Fcfa' },
    { name: 'Madelaines', image: 'assets/img/madelaines.jpg', price: '175 Fcfa' },
    { name: 'beignets', image: 'assets/img/beignets.jpg', price: '50 Fcfa' },
    { name: 'croissants ', image: 'assets/img/croissants.jpg', price: '1000 Fcfa' }
  ];

}
