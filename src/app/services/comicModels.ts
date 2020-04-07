export namespace ComicModels {

    export interface Url {
        type: string;
        url: string;
    }

    export interface Series {
        resourceURI: string;
        name: string;
    }

    export interface Date {
        type: string;
        date: Date;
    }

    export interface Price {
        type: string;
        price: number;
    }

    export interface Thumbnail {
        path: string;
        extension: string;
    }

    export interface Item {
        resourceURI: string;
        name: string;
        role: string;
    }

    export interface Creators {
        available: number;
        collectionURI: string;
        items: Item[];
        returned: number;
    }

    export interface Characters {
        available: number;
        collectionURI: string;
        items: any[];
        returned: number;
    }

    export interface Item2 {
        resourceURI: string;
        name: string;
        type: string;
    }

    export interface Stories {
        available: number;
        collectionURI: string;
        items: Item2[];
        returned: number;
    }

    export interface Events {
        available: number;
        collectionURI: string;
        items: any[];
        returned: number;
    }
    export class ShoppingCart { 
        items: CartItem[] = [];
        totalItemsCount: number;
        totalPriceCart: number;

         getTotalPrice(): number {
            let sum = 0;
            this.items.forEach(function(value, key){
                sum += value.totalPrice;
            });
            
            return sum;
          }

        gettotalItemsCount() : number {
            let count = 0;
            this.items.forEach(function(value, key){
                count += value.qtd;
            });
            return count;
          }
    }
    export class CartItem{
        qtd: number;
        result: Result;
        totalPrice: number;

         getTotalPrice(): number{ 
            
            return this.result.prices[0].price * this.qtd; 
        }
    }

    export class Result {
        id: number;
        promotionPrice: number;
        digitalId: number;
        title: string;
        issueNumber: number;
        variantDescription: string;
        description?: any;
        rare: boolean ;
        modified: Date;
        isbn: string;
        upc: string;
        diamondCode: string;
        ean: string;
        issn: string;
        format: string;
        pageCount: number;
        textObjects: any[];
        resourceURI: string;
        urls: Url[];
        series: Series;
        variants: any[];
        collections: any[];
        collectedIssues: any[];
        dates: Date[];
        prices: Price[];
        thumbnail: Thumbnail;
        images: any[];
        creators: Creators;
        characters: Characters;
        stories: Stories;
        events: Events;
        promotion: boolean;
        

        constructor(){
            this.rare= false;
        }
            
    }

    export interface Data {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: Result[];
    }

    export interface Comic {
        code: number;
        status: string;
        copyright: string;
        attributionText: string;
        attributionHTML: string;
        etag: string;
        data: Data;
    }

}

