import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {ComicModels} from 'src/app/services/comicModels';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html'
})
export class CheckOutComponent implements OnInit {
  currentDate = new Date();

// cart$: ComicModels.ShoppingCart;

constructor(private shoppingCartService: CartService) { }

  ngOnInit(): void {
    this.shoppingCartService.clearCart();
  }

}
