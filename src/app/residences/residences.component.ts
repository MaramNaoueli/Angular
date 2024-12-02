import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  search_item="";
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/R4.jpg", status: "En Construction"}
    ];


    favoris:Residence[]=[];
showLocation(address:string)
{
  if(address === "inconnu"){
    alert("l'adresse est inconnu");
  } else {
    alert("l'adresse est"+address);
  }
}
addFavoris(residences:Residence){
 if(!this.favoris.includes(residences)){
  this.favoris.push(residences);
 }
  console.log(this.favoris);

}

filtreByAddress(){
  return this.listResidences.filter(Residence=> Residence.address.toLowerCase().includes(this.search_item.toLocaleLowerCase()));
}
}
