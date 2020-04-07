import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';
import { ComicModels } from 'src/app/services/comicModels';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private comicService: ComicService, private cartService: CartService) { }

  public comicContent: ComicModels.Comic;

  addTocart(comic :ComicModels.Result )
  {
     debugger;
    this.cartService.adItemToCart(comic);
  }

  ngOnInit(): void {
    let data = localStorage.getItem("comics");
    this.comicContent = JSON.parse(data);
    if (this.comicContent == null) {
      this.comicService.getComics()
        .subscribe(
          result => {

            this.generaterandomNumbers(result.data.results.length).forEach((item, index) => {
              result.data.results[item].rare = true;
            });
            this.generaterandomNumbers(result.data.results.length).forEach((item, index) => {
              result.data.results[item].promotion = true;
              result.data.results[item].promotionPrice = result.data.results[item].prices[0].price * 0.9;
            });
            this.comicContent = result;
            localStorage.setItem("comics", JSON.stringify(this.comicContent))
            console.log(result);
          },
          error => console.log(error)
        );
    }

  }

  generaterandomNumbers(size) {
    var arr = [];
    while (arr.length < 10) {
      var r = Math.floor(Math.random() * size) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    return arr;
  }

}