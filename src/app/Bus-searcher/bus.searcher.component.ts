import { Component,Output,EventEmitter } from "@angular/core";


@Component({
    selector:"app-Bus-searcher",
    templateUrl:"./bus.searcher.component.html",
    styleUrls:['./bus.searcher.component.css']
})

export class bus_Searcher_Component{
    Leaving_From='';
    Going_to='';
    book_date='';
    constructor(){}
    @Output() event = new EventEmitter<string>()
    Get_search_val(){
       this.event.emit(this.Leaving_From +"@"+this.Going_to+"@"+this.book_date)
    }

}