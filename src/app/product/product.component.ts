import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
class="4SE2";
ph="taper votre username";
ph1="taper votre pwd";
userName="";
pwd="";

confirmLogin(){
  return confirm ("vous etes bien logger!!")
}
}
