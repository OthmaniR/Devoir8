import { Injectable } from '@angular/core';
import { car } from '../model/car.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})

  

export class CarService {

apiURL: string = 'http://localhost:8080/cars/api';




  car : car[];
  constructor(private http : HttpClient) {
    this.car = [
      { idvoiture : 1, nomvoiture : "Audi ", prixvoiture : 3000.600, dateCreation  : new Date("01/14/2011")},
      { idvoiture : 2, nomvoiture : "BMW", prixvoiture : 450, dateCreation : new Date("12/17/2010")},
      { idvoiture : 3, nomvoiture :"Porshe", prixvoiture : 900.123, dateCreation : new Date("02/20/2020")},
      { idvoiture : 4, nomvoiture :"land rover", prixvoiture : 750.023, dateCreation : new Date("05/20/2018")},
      { idvoiture : 5, nomvoiture :"mercedes", prixvoiture : 600.000, dateCreation : new Date("06/20/2013")},
      { idvoiture : 6, nomvoiture :"toyota", prixvoiture : 300.321, dateCreation : new Date("07/20/2020")},
      { idvoiture : 7, nomvoiture :"volkswagen", prixvoiture : 150.111, dateCreation : new Date("08/20/2021")}
      ];
      }
      listecars():car[] {return this.car;
      }

      ajoutercar( c: car):Observable<car>{
        return this.http.post<car>(this.apiURL, c, httpOptions);
      }
     

//       updateCar(c : car){
// // console.log(p);
// this.supprimervoiture(c);
// this.ajoutercar(c);
// }
updateCar(prod :car) : Observable<car>
    {
            return this.http.put<car>(this.apiURL,prod, httpOptions);
       }

  supprimervoiture(c: car) {

//     const index = this.car.indexOf(c, 0);
// if (index > -1) {
// this.car.splice(index, 1);
const url = `${this.apiURL}/${c}`;
return this.http.delete(url, httpOptions);

  }

  cars!: car;
  consultervoiture(id: number): Observable<car> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<car>(url);
    
    // this.cars = this.car.find((d) => d.idvoiture == id)!;
    // return this.cars;

    
  }
 
  listecar(): Observable<car[]>{
    return this.http.get<car[]>(this.apiURL);
    }

    // updatecar(prod :car) : Observable<car>
    // {
    //         return this.http.put<car>(this.apiURL,prod, httpOptions);
    //    }
    
      
    
}
   




