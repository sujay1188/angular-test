import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, do this in html
  template: `
  
  <fieldset>
    <h1>{{name}}</h1>
    <img [src]="image"/>
  
  <label [style.color]="color"> Favorite Color </label>
  <button (click)="clicked()">Toggle Color</button>
  <select (change)="colorChange($event.target.value)">
    <option>red</option>
    <option>blue</option>
    <option>green</option>
  </select>

  </fieldset>


  `,
})
export class AppComponent  { 
  name = 'Alex Smith';
  image = 'favicon.ico';
  color = 'red';
  

  clicked() { 
    this.color = this.color === 'red'? 'blue' : 'red';
  }

  colorChange(color1: string) { 
    this.color= color1;

}
}

