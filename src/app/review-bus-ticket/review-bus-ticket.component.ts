import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {BusDataService} from '../service/bus-data.service';

@Component({
  selector: 'app-review-bus-ticket',
  templateUrl: './review-bus-ticket.component.html',
  styleUrls: ['./review-bus-ticket.component.css']
})
export class ReviewBusTicketComponent implements OnInit {
  bus_id:any;
  Total_rate:any;
  Seats:any[]=[];
  Bus_data_from_service:any;
  new_bus_data:any;
  constructor(private route:Router,private active_route:ActivatedRoute,private BusData:BusDataService){}
  ngOnInit(){
    this.active_route.params.subscribe(params => {
      this.bus_id = params['id'];
      this.Total_rate = params['total-amount'];
    });

    this.Bus_data_from_service = this.BusData.data;
    this.Bus_data_from_service.forEach((value:any)=>{
      if(value.id == this.bus_id){
        this.new_bus_data = value;
      }
    })
    this.Seats = this.BusData.selected_seats
    // console.log(this.Seats)
  }
  go_back(){
    this.route.navigate(['/seat-selection',this.bus_id])
  }
  Confirm_pay(id:any){
    this.BusData.bus_id = id;
    this.BusData.total_amount = this.Total_rate;
    this.route.navigate(['/passenger'])
  }
}
