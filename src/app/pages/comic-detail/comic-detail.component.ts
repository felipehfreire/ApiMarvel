import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html'
})
export class ComicDetailComponent implements OnInit {

  public  comic: any;

  constructor( private location:Location, private router: Router) {}

  ngOnInit(): void {
    this.comic = this.location.getState()["comic"];
    if(this.comic == null)  
      this.router.navigate(['/']);
  }
}
