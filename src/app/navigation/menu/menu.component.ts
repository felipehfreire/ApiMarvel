import { Component, OnInit } from '@angular/core';
import {ComicModels} from 'src/app/services/comicModels';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  cart$: ComicModels.ShoppingCart;

  constructor(private shoppingCartService: CartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }

}
