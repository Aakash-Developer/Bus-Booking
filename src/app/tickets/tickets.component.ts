import { Component, OnChanges, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import {BusDataService} from '../service/bus-data.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit{
  booking_id: any[] = [];
  user_info: any;
  username: string = '';
  Email:string='';
  full_record: any[]=[];

  booked_tickets:any[]=[]
  constructor(private route:Router,private active_route:ActivatedRoute,private booking_rec:BusDataService){}

  ngOnInit(){

    this.user_info = localStorage.getItem("UserInfo")
    this.user_info = JSON.parse(this.user_info)
    this.username = this.user_info.Username;
    this.Email = this.user_info.Email;

    this.booking_rec.Booked_data().subscribe((val:any)=>{
      console.log(val)
      for (const key in val) {
        if (val.hasOwnProperty(key)) {
          const value = val[key];
          if(this.username == value.bus_info.Username && this.Email == value.bus_info.Email){
          console.log(`Key: ${key}, Value: ${value.bus_info.Username}`)
          this.booked_tickets.push({"username":value.bus_info.Username,
          "email":value.bus_info.Email,
          "mobile":value.bus_info.Number,
          "Selected_Seats":value.bus_info.Selected_Seats,
          "Total_price":value.bus_info.Total_price,
          "Bus_data":value.bus_info.Bus_data,
          "Booking_id":key
        })
          }
        }
      }
    })
    console.log(this.booked_tickets)
  }
  Print(){
    window.print();
  }
}
