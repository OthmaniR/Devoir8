import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars : car[]; //un tableau de chînes de caractères
  constructor(private CarService : CarService,private router : Router,
    public authService: AuthService,)  {  
    this.cars = CarService.listecars();
   }

  ngOnInit(): void {
this.CarService.listecar().subscribe(prod => {
  console.log(prod);
  this.cars = prod;
})

  }

  supprimervoiture( ca: car){
//supprimer le produit prod du tableau produits
// const index = this.cars.indexOf(ca, 0);
// if (index > -1) {
// this.cars.splice(index, 1);
// }
// let conf = confirm("Etes-vous sûr ?");
//  if (conf)
//  this.CarService.supprimervoiture(ca);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.CarService.supprimervoiture(ca).subscribe(() => {
console.log("voiture supprimé");
});
this.router.navigate(['cars']).then(() => {
window.location.reload();
});


  }

  ajoutercar( prod: car){
    this.cars.push(prod);
    }

  
    
}
