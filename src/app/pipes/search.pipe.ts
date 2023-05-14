import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(busList: any[], fromCity: any, toCity: any, searchDate: any): any[] {

  if (!busList || !fromCity || !toCity) {
    return busList;
  }
  return busList.filter(bus => {
    const [leavingFrom, goingTo] = bus.root.split('-')
    console.log(leavingFrom);
    const matchesFrom = leavingFrom.toLowerCase().includes(fromCity.toLowerCase());
    const matchesTo = goingTo.toLowerCase().includes(toCity.toLowerCase());
    // const matchesDate = !searchDate.date || bus.Date === searchDate.date;
    return matchesFrom && matchesTo
    //  && matchesDate
  });
}


} 
