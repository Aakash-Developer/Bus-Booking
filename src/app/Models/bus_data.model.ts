export interface BusRecord{
    forEach(arg0: (element: any) => void): unknown;
    busName:string,
    root:string,
    seatsAvailable: number,
    totalSeats:number,
    seatRate: number,
    arrivalTime: string,
    departureTime: string,
    Date:string
} 