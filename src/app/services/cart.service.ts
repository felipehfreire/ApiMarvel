import { Injectable } from '@angular/core';
import { ComicModels } from 'src/app/services/comicModels';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public shopingCart: ComicModels.ShoppingCart = new ComicModels.ShoppingCart();

  async getCart(): Promise<ComicModels.ShoppingCart> {
    return this.shopingCart;
  }

  constructor() {
    let data = localStorage.getItem("shopingCart");
    
    if (data != null) {
      this.shopingCart = Object.assign(new ComicModels.ShoppingCart(), JSON.parse(data));
    }

  }

  adItemToCart(item: ComicModels.Result) {

    var index = this.shopingCart.items.findIndex(x => x.result.id === item.id);
    if (index == - 1) {
      var cartItem = new ComicModels.CartItem();
      cartItem.result = item;
      cartItem.qtd = 1;
      cartItem.totalPrice =cartItem.getTotalPrice();
      this.shopingCart.items.push(cartItem);
      this.shopingCart.totalItemsCount = this.shopingCart.gettotalItemsCount();
      this.shopingCart.totalPriceCart = this.shopingCart.getTotalPrice();
    } else {
      this.shopingCart.items[index].qtd++;
      this.shopingCart.items[index].totalPrice = this.shopingCart.items[index].getTotalPrice();
      this.shopingCart.totalItemsCount = this.shopingCart.gettotalItemsCount();
      this.shopingCart.totalPriceCart = this.shopingCart.getTotalPrice();
    }
    localStorage.setItem("shopingCart", JSON.stringify(this.shopingCart));
  }

  clearCart() {
    localStorage.removeItem("shopingCart");
    this.shopingCart.items = new Array<ComicModels.CartItem>();
    this.shopingCart.totalItemsCount= 0;
    this.shopingCart.totalPriceCart = 0;
  }


}

