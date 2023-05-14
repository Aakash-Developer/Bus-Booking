import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loaderComponent } from './Bus-loader/bus.loader.component';
import { bus_Searcher_Component } from './Bus-searcher/bus.searcher.component';
import { headerComponent } from './Header/header.component';
import { homeComponent } from './Home/home.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ReviewBusTicketComponent } from './review-bus-ticket/review-bus-ticket.component';
import { PassengerInformationComponent } from './passenger-information/passenger-information.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    loaderComponent,
    headerComponent,
    bus_Searcher_Component,
    homeComponent,
    SeatSelectionComponent,
    TicketsComponent,
    ReviewBusTicketComponent,
    PassengerInformationComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
