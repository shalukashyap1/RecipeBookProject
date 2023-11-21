import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  addToCartById(itemId:any){
    return this.http.get('http://localhost:3005/products/'+itemId);
  }
}
