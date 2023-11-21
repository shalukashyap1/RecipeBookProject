import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-letestrecipe',
  templateUrl: './letestrecipe.component.html',
  styleUrls: ['./letestrecipe.component.css']
})
export class LetestrecipeComponent {
userdata:any;
itemid:any;
 public addtocart:any;

  constructor(private service:ItemService,private route:Router,private http:HttpClient,router:ActivatedRoute){
this.http.get<any>('http://localhost:3005/products').subscribe(val=>{
this.userdata=val;
console.log(this.userdata);
    })
  
    
  }
  openmodel(){
this.route.navigate(['/addnew'])
  }
  add(id:any){
this.service.addToCartById(this.itemid).subscribe(val=>{
  this.itemid=val;
  console.log(this.itemid)
})
  }
}
