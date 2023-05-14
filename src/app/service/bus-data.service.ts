import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {BusRecord} from '../Models/bus_data.model'
import { User_rec } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BusDataService {
  url:string;
  data:any=[];
  selected_seats:any=[];
  bus_id:any;
  total_amount:any;
  constructor(private http:HttpClient) {
    // this.url = '../../assets/bus-data.json';
    this.url = 'https://angular-projects-c8210-default-rtdb.firebaseio.com/';
  }
  Get_data(){
   return this.http.get<BusRecord | never>(this.url + 'Bus-data.json')
  }

  Passenger_data(bus_info:any){
    return this.http.post(this.url + 'Passenger_data.json',{bus_info})
  }
  
  Booked_data(){
    return this.http.get(this.url + 'Passenger_data.json')
  }

}
