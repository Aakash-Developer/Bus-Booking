import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './Home/home.component';
import { PassengerInformationComponent } from './passenger-information/passenger-information.component';
import { ReviewBusTicketComponent } from './review-bus-ticket/review-bus-ticket.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path:"",component:homeComponent},
  {path:"home",component:homeComponent},
  // {path:"seat-selection",component:SeatSelectionComponent},
  {path:"seat-selection/:id",component:SeatSelectionComponent},
  {path:"tickets",component:TicketsComponent},
  {path:"tickets/:username",component:TicketsComponent},
  {path:"passenger-information",component:PassengerInformationComponent},
  // {path:"review-bus-ticket",component:ReviewBusTicketComponent},
  {path:"review-bus-ticket/:id/:total-amount",component:ReviewBusTicketComponent},
  {path:"passenger",component:PassengerInformationComponent},
  {path:"**",component:homeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
