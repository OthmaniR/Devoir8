import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { car } from '../model/car.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styles: [
  ]
})
export class UpdateCarComponent implements OnInit {
  currentcar = new car();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private CarService: CarService) { }

  ngOnInit(): void {
    this.CarService.consultervoiture(this.activatedRoute.snapshot.params['idvoiture']).subscribe( prod =>{ this.currentcar = prod; } ) ;


//     this.currentcar = this.CarService.consultervoiture(
//       this.activatedRoute.snapshot.params['id']
//       );
// console.log(this.currentcar);
  }




  updatecar()
  {

  // this.CarService.updateCar(this.currentcar);
  // this.router.navigate(['cars', this.currentcar]);
  this.CarService.updateCar(this.currentcar).subscribe(prod => {
    this.router.navigate(['cars']);
    },(error) => { alert("Problème lors de la modification !"); }
    );

  }
  
  
}
