import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, from } from 'rxjs';
import {ComicModels} from './comicModels';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  protected UrlServiceV1: string = "https://gateway.marvel.com:443/v1/public/comics?format=magazine&formatType=comic&limit=100&ts=637211574875143544&apikey=2c0ddf40cdd9d830419cf43b2c5947c8&hash=b91ad6434266804f769c464d97740b9f&";

    constructor(private http: HttpClient) { }

    getComics() : Observable<ComicModels.Comic>{
      return this.http
          .get<ComicModels.Comic>(this.UrlServiceV1);
    }
  }
