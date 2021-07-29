export class Stay{
    public id: string;
    public name:string;
    public category:string;
    public location:string;
    public city:string;
    public country:string;
    public latitude:number;
    public longitude:number;
    public distFromAirPort:number;
    public distFromCityCenter:number;
    public distFromMetro:number;
    public distFromHospital:number;
    public costPppn:number;
    public rating:number;
    public stars:number;
    public wheelchair:boolean;
    public breakfast:boolean;
    public cab:boolean;
    public wifi:boolean;
    public ac:boolean;
    public pool:boolean;
    public laundry:boolean;
    public housekeeping:boolean;
    public spa:boolean;
    public helpdesk:boolean;
    public roomService:boolean;
    public gym:boolean;
    public restaurant:boolean;
    public babyFriendly:boolean;
    public petFriendly:boolean;
    public parking:boolean;

    constructor(id:string,
        name:string,
        category:string,
         location:string,
         city:string,
         country:string,
         latitude:number,
         longitude:number,
         distFromAirPort:number,
         distFromCityCenter:number,
         distFromMetro:number,
         distFromHospital:number,
         costPppn:number,
         rating:number,
         stars:number,
         wheelchair:boolean,
         breakfast:boolean,
         cab:boolean,
         wifi:boolean,
         ac:boolean,
         pool:boolean,
         laundry:boolean,
         housekeeping:boolean,
         spa:boolean,
         helpdesk:boolean,
         roomService:boolean,
         gym:boolean,
         restaurant:boolean,
         babyFriendly:boolean,
         petFriendly:boolean,parking:boolean){
        
        this.name=name;
        this.category=category;
        this.location=location;
        this.city=city;
        this.country=country;
        this.latitude=latitude;
        this.longitude=longitude;
        this.distFromAirPort=distFromAirPort;
        this.distFromCityCenter=distFromCityCenter;
        this.distFromMetro=distFromMetro;
        this.distFromHospital=distFromHospital;
        this.costPppn=costPppn;
        this.rating=rating;
        this.stars=stars;
        this.wheelchair=wheelchair;
        this.breakfast=breakfast;
        this.cab=cab;
        this.wifi=wifi;
        this.ac=ac;
        this.pool=pool;
        this.laundry=laundry;
        this.housekeeping=housekeeping;
        this.spa=spa;
        this.helpdesk=helpdesk;
        this.roomService=roomService;
        this.gym=gym;
        this.restaurant=restaurant;
        this.babyFriendly=babyFriendly;
        this.petFriendly=petFriendly;
        this.parking=parking;

    }
}