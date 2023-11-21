import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { DemoserviceService } from 'src/app/demoservice.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  data:any;
  resId:any;
  desc:any;
  constructor(public _demoserviceService:DemoserviceService, route:Router){
    this.data=this._demoserviceService.getData();
  }
  showRecipe(id:number){
    
    this.resId=id;
  }

  

}
