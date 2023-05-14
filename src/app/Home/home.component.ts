import { Component , OnInit,OnChanges} from "@angular/core";
import {BusDataService} from '../service/bus-data.service';
import { BusRecord } from "../Models/bus_data.model";
import { SearchData } from "../Models/search.model";
import { Observable, throwError } from 'rxjs';
import { catchError, retry, throwIfEmpty } from 'rxjs/operators';
import { Router,ActivatedRoute  } from "@angular/router";
import {SearchPipe} from "../pipes/search.pipe"

@Component({
    selector:"app-home",
    templateUrl:"./home.component.html",
    styleUrls:['./home.component.css']
})

export class homeComponent implements OnInit,OnChanges{
    loader = true;
    search_data={ from:null,to:null,date:null};
    Bus_Records:any;
    new_record:any[]=[];
    Book_date:Date = new Date;
    Book_date_val = (this.Book_date.getDate()+"-"+this.Book_date.getMonth()+"-"+this.Book_date.getFullYear())
    constructor(private BusDataService:BusDataService, private Route:Router, private active_Route:ActivatedRoute ){}
    ngOnInit(){
        this.loader =true;
        this.BusDataService.Get_data().subscribe((val:any)=>{
            for(let a =0; a<val.length;a++){
            val[a].Date= this.Book_date_val
            }
            this.loader=false
            this.Bus_Records = val;
            this.BusDataService.data=val;
        })
    }
    viewSeats(id:number|string){
        this.Route.navigate(['/seat-selection',id])
    }

    BusData($event:any){
        let data = $event.split("@");
        this.search_data = {"from":data[0],"to":data[1],"date":data[2]||undefined}
    }

    ngOnChanges(){}
}