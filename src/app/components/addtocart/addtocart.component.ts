import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent {
  data:any;
constructor(private router:ActivatedRoute){
  this.router.paramMap.subscribe(val=>{
  this.data=val.get('addtocart');
  console.log(this.data);
  })
}
  
  
remove(){

}
}
