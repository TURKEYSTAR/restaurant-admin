import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  categories = [
    { name: 'Petit Déjeuner', image: 'assets/img/breakfast1.jpg', link: '/makyatraiteur/menu/breackfast' },
    { name: 'Plat du Jour', image: 'assets/img/plats.jpg', link: '/makyatraiteur/menu/plats' },
    { name: 'Fast Food', image: 'assets/img/fastfood.jpg', link: '/makyatraiteur/menu/fastfood' },
    { name: 'Viennoiseries', image: 'assets/img/viennoiseries2.jpg', link: '/makyatraiteur/menu/viennoiseries' },
    { name: 'Boissons', image: 'assets/img/boissons.jpg', link: '/makyatraiteur/menu/boissons' }
  ];
}
