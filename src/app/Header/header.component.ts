import { Component,OnInit } from "@angular/core";

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})

export class headerComponent implements OnInit{

    U_rec:any;
    ngOnInit(){
        if(localStorage.getItem('UserInfo')){
            let val = localStorage.getItem('UserInfo')
            if (val) {
                this.U_rec = JSON.parse(val);
            }
            console.log(this.U_rec)
        }
    }


    logout(){
        localStorage.removeItem('UserInfo')
    }
}