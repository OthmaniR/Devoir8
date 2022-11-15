import { Component, OnInit } from '@angular/core';
import { car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  newcar = new car();

  constructor(private carServices: CarService,
    private router : Router) { }

  ngOnInit(): void {
    
  }
  addcar(){
    // this.carServices.ajoutercar(this.newcar);
    // this.router.navigate(['cars']);
    this.carServices.ajoutercar(this.newcar).subscribe(prod => {
      console.log(prod);
      });
      this.router.navigate(['cars']);

    }

}
