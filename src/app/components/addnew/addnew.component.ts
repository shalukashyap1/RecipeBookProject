import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent {
  constructor(private http:HttpClient,private route:Router){}
  itemdata:any;
  add(data:any){
  

  this.itemdata=data;
  console.log(this.itemdata);
  this.http.post<any>('http://localhost:3005/products',this.itemdata).subscribe(val=>{
    alert('successfully added item');
  })
  
  }
}
