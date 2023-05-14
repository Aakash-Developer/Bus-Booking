import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder , FormControl } from '@angular/forms';
import {  Validators} from '@angular/forms';
import { BusDataService } from '../service/bus-data.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passenger-information',
  templateUrl: './passenger-information.component.html',
  styleUrls: ['./passenger-information.component.css']
})
export class PassengerInformationComponent implements OnInit{
  bus_id = this.Send_data.bus_id;
  Total_rate = this.Send_data.total_amount;
  Seats = this.Send_data.selected_seats;
  Bus_data_from_service:any;
  new_bus_data:any;
  Store_data:any;
  profileForm = this.fb.group({
    username: ['',Validators.required],
    number: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(10)]],
    email: ['',[Validators.required,Validators.email]],
  });

  constructor(private fb: FormBuilder, private Send_data:BusDataService,private route:Router,private active_route:ActivatedRoute) { }

  ngOnInit(){
    this.Bus_data_from_service = this.Send_data.data;
    this.Bus_data_from_service.forEach((value:any)=>{
      if(value.id == this.bus_id){
        this.new_bus_data = value;
      }
    })
  }

  Submit(){
    console.log(this.profileForm.value)
    let user = this.profileForm.value.username;
    let number = this.profileForm.value.number;
    let email = this.profileForm.value.email;
    let bus_info = {"Username":user,"Number":number,"Email":email,"Total_price":this.Total_rate,"Selected_Seats":this.Seats,"Bus_data":this.new_bus_data}
    let store = {"Username":user,"Number":number,"Email":email}
    if(store){
      localStorage.setItem("UserInfo",JSON.stringify(store))
    }
    this.Send_data.Passenger_data(bus_info).subscribe((val:any)=>{
      if(val){
        this.route.navigate(['/tickets'])
      }
    })
    this.profileForm.reset();

  }
}
