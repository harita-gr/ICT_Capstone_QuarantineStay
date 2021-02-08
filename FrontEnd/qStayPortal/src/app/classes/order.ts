import { Stay } from "./stay";

export class Order {

    constructor(
        // public stayDetails:Stay,
        public fullName:string,
        public age:number,
        public phone:string,
        public from:string,
        public airport:string,
        public dateCheckin:string,
        public adultNo:number,
        public childNo:number,
        public roomType:string,
        public noOfDays:number,
        public optTransport:boolean,
        public optMedical:boolean
    ){}
}
