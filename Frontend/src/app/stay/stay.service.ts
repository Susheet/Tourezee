import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable()
export class StayService{
    
    countryName="Singapore"
    cityName="Singapore"
    hotelChecked:any
    

    hotelSelected=new EventEmitter<any>();
    constructor(private http: HttpClient){
        
    }
    ngOnInit():void{
        
      }
      
    getByPlace(){
        return this.http.get(`https://tourezee.herokuapp.com/hotels?country=${this.countryName}&city=${this.cityName}`)
    }  
    getHotel(){
        return this.http.get(`https://tourezee.herokuapp.com/hotels?country=Singapore&city=Singapore`);
    }
    getBusiness(){
        return this.http.get(`https://tourezee.herokuapp.com/hotels/business?country=${this.countryName}&city=${this.cityName}&cabService=No&swimmingPool=No&spa=No&roomService=No&bar=No&gym=No&parking=No&restaurant=No`);
    }
    getMedical(){
        return this.http.get(`https://tourezee.herokuapp.com/hotels/medical?country=${this.countryName}&city=${this.cityName}&swimmingPool=No&spa=No&roomService=No&bar=No&gym=No&babyFriendly=No&parking=No&restaurant=No`);
    }
    getStudent(){
        return this.http.get(`https://tourezee.herokuapp.com/hotels/student?country=${this.countryName}&city=${this.cityName}&cabService=No&swimmingPool=No&houseKeeping=No&spa=No&roomService=No&bar=No&gym=No&restaurant=No`);
    }
    getTourist(){
        return this.http.get(`https://tourezee.herokuapp.com/hotels/tourist?country=${this.countryName}&city=${this.cityName}&cabService=No&swimmingPool=No&houseKeeping=No&spa=No&roomService=No&gym=No&babyFriendly=No&restaurant=No`);
    }
    /*-------------------------------------------Attraction Methods---------------------------------------------------------- */
    getByPlaceAttraction(){
        return this.http.get(`https://tourezee.herokuapp.com/attractions?country=${this.countryName}&city=${this.cityName}`)
    }  
    getAttractions(){
        return this.http.get(`https://tourezee.herokuapp.com/attractions?country=Singapore&city=Singapore`);
    }
    getBusinessAttraction(){
        return this.http.get(`https://tourezee.herokuapp.com/get_attraction_by_persona?country=${this.countryName}&city=${this.cityName}&persona=Business`);
    }
    getMedicalAttraction(){
        return this.http.get(`https://tourezee.herokuapp.com/get_attraction_by_persona?country=${this.countryName}&city=${this.cityName}&persona=Medical`);
    }
    getStudentAttraction(){
        return this.http.get(`https://tourezee.herokuapp.com/get_attraction_by_persona?country=${this.countryName}&city=${this.cityName}&persona=Student`);
    }
    getTouristAttraction(){
        return this.http.get(`https://tourezee.herokuapp.com/get_attraction_by_persona?country=${this.countryName}&city=${this.cityName}&persona=Tourist`);
    }

}
