import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {BusDataService} from '../service/bus-data.service';


@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {
  checkBoxes: HTMLCollectionOf<HTMLInputElement>;
  
  bus_id:any;
  Bus_data_from_service:any;
  new_bus_data:any;

  Selected:any = [];
  Total_price:any = [];
  Price_Result=0;
  Price:HTMLCollectionOf<HTMLInputElement>
  constructor(private elementRef: ElementRef, private renderer: Renderer2,private Route:Router , private active_route:ActivatedRoute,private bus_Record_service:BusDataService) {
    this.checkBoxes = this.elementRef.nativeElement.getElementsByClassName('seat');
    this.Price = this.elementRef.nativeElement.getElementsByClassName('ticket-Price');
  }

  ngOnInit() {

    this.active_route.params.subscribe(params => {
      this.bus_id = params['id'];
    });
    this.Bus_data_from_service = this.bus_Record_service.data;
    this.Bus_data_from_service.forEach((value:any)=>{
      if(value.id == this.bus_id){
        this.new_bus_data = value;
      }
    })

    Array.from(this.checkBoxes).forEach((checkBox) => {
      this.renderer.listen(checkBox, 'click', () => {
        if( checkBox.children[0].getAttribute('class') !='selected' && checkBox.children[0].getAttribute('class') !='booked'){
          checkBox.children[0].setAttribute('class','selected')
          checkBox.children[1].setAttribute('src','../../assets/Images/green.png');
          checkBox.children[0].setAttribute('checked','true')
          this.Selected.push(checkBox.children[0].getAttribute('value'))
          this.Total_price.push(this.Price[0].value)
          this.Price_Result = this.sumArrayValues(this.Total_price)
        }else if(checkBox.children[0].getAttribute('class') =='booked'){
          checkBox.children[1].setAttribute('src','../../assets/Images/Red.png');
        }else{
          checkBox.children[0].setAttribute('class','')
          checkBox.children[1].setAttribute('src','../../assets/Images/Normal.png');
          checkBox.children[0].setAttribute('checked','false')
          checkBox.children[0].setAttribute('checked','false')
          let seat_num = checkBox.children[0].getAttribute('value')
         this.removeValueFromArray(this.Selected,seat_num)
         this.Total_price.splice(0,1);
         this.Price_Result = this.sumArrayValues(this.Total_price)
        }
      });
    });
   this.checkSeats()
  }

  checkSeats(){
    Array.from(this.checkBoxes).forEach((checkBox) => {
      if(checkBox.children[0].getAttribute('class') == 'booked'){
        checkBox.children[1].setAttribute('src','../../assets/Images/Red.png');
        checkBox.style.cursor='not-allowed'
      }
    })
  }

  removeValueFromArray(arr:any, val:any) {
    if (arr.indexOf(val) !== -1) {
      arr.splice(arr.indexOf(val), 1);
    }
  }

 sumArrayValues(array:any) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += Number(array[i]);
    }
    return sum;
  }
  preview():void{
   if(this.Selected.length !>0){
    this.bus_Record_service.selected_seats = this.Selected;
    this.Route.navigate(['/review-bus-ticket',this.bus_id,this.Price_Result])
   }
  }

}
