export class OrderSave {
    constructor(
        public userId:string,
        public stayId:string,
        public hotelName:string,
        public district:string,
        public address:string,
        public totalprice:number,
        public image:string,
        public distanceFromAirport:string,
        public noOfDays:number,
        public optMedical:boolean,
        public optTransport:boolean,
        public adultNo:number,
        public childNo:number   
    ){}
}
