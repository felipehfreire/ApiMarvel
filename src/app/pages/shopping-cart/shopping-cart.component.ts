import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {ComicModels} from 'src/app/services/comicModels';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  cart$: ComicModels.ShoppingCart;

  constructor(private shoppingCartService: CartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }

  async clearCart() { 
    debugger
    this.shoppingCartService.clearCart();
  }

}
