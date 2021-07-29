import { HttpClient } from '@angular/common/http';
import { ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StayService } from '../stay.service';

@Component({
  selector: 'app-stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.css']
})
export class StayListComponent implements OnInit {
   hotels : any
   attractions:any
   flagAttractions=[];
  star:number;
  place:any
  option=true;
  persona:any
  isHotel=false;
  isAttraction=false;
  @ViewChild('placeInput',{static:false}) placeInputRef:ElementRef

  constructor(private router:Router,
              private stayService:StayService,
              private http:HttpClient) { }
    

  ngOnInit(): void {
      this.stayService.getHotel().subscribe(
      (hotel:any) => {
        
        this.hotels = hotel;
      }
    )
    this.stayService.getAttractions().subscribe((attraction:any)=>{
      this.attractions=attraction
    })
    }
    onSearch(){
      this.persona="";
      this.place=this.placeInputRef.nativeElement.value;
      if(this.place==="Singapore"){
        this.stayService.cityName="Singapore";
        this.stayService.countryName=this.place;
      }
      else if(this.place==="India"){
        this.stayService.cityName="Delhi";
        this.stayService.countryName=this.place;
      }
      else if(this.place==="Delhi"){
        this.stayService.cityName=this.place;
        this.stayService.countryName="India";
      }
      else if(this.place==="Thailand"){
        this.stayService.cityName="Bangkok";
        this.stayService.countryName=this.place;
      }
      else if(this.place==="Bangkok"){
        this.stayService.cityName=this.place;
        this.stayService.countryName="Thailand";
      }
      else if(this.place==="Phuket"){
        this.stayService.cityName=this.place;
        this.stayService.countryName="Thailand";
      }
      if(this.option){
        this.isHotel=true;
        this.isAttraction=false;
        this.stayService.getByPlace().subscribe((hotel:any)=>{
          this.hotels=hotel;
         })
      }else{
        this.isHotel=false;
        this.isAttraction=true;
        this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
          this.attractions=attraction;
        })
      }
    }
   
    onGetHotels(){
      this.persona="";
      this.option=true;
      this.isAttraction=false;
      this.isHotel=true;
      this.place=this.placeInputRef.nativeElement.value;
      if(this.place==="Singapore"){
        this.stayService.cityName="Singapore";
        this.stayService.countryName=this.place;
      }
      else if(this.place==="India"){
        this.stayService.cityName="Delhi";
        this.stayService.countryName=this.place;
      }
      else if(this.place==="Delhi"){
        this.stayService.cityName=this.place;
        this.stayService.countryName="India";
      }
      else if(this.place==="Thailand"){
        this.stayService.cityName="Bangkok";
        this.stayService.countryName=this.place;
      }
      else if(this.place==="Bangkok"){
        this.stayService.cityName=this.place;
        this.stayService.countryName="Thailand";
      }
      else if(this.place==="Phuket"){
        this.stayService.cityName=this.place;
        this.stayService.countryName="Thailand";
      }
      if(this.option){
        this.stayService.getByPlace().subscribe((hotel:any)=>{
          this.hotels=hotel;
         })
      }else{
        this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
          this.attractions=attraction;
        })
      }
    }
    onGetAttractions(){
      this.option=false;
      this.isHotel=false;
      this.isAttraction=true;
      this.persona="";
      this.place=this.placeInputRef.nativeElement.value;
      if(this.place==="Singapore"){
        this.stayService.cityName="Singapore";
        this.stayService.countryName=this.place;
      }
      else if(this.place==="India"){
        this.stayService.cityName="Delhi";
        this.stayService.countryName=this.place;
      }
      else if(this.place==="Delhi"){
        this.stayService.cityName=this.place;
        this.stayService.countryName="India";
      }
      else if(this.place==="Thailand"){
        this.stayService.cityName="Bangkok";
        this.stayService.countryName=this.place;
      }
      else if(this.place==="Bangkok"){
        this.stayService.cityName=this.place;
        this.stayService.countryName="Thailand";
      }
      else if(this.place==="Phuket"){
        this.stayService.cityName=this.place;
        this.stayService.countryName="Thailand";
      }
      if(this.option){
        this.stayService.getByPlace().subscribe((hotel:any)=>{
          this.hotels=hotel;
         })
      }else{
        this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
          this.attractions=attraction;
        })
      }
    }
  getBusinessHotels(){
    this.persona="Business"
     this.stayService.getBusiness().subscribe((hotel:any)=>{
       this.hotels=hotel;
     })
  }
  getMedicalHotels(){
    this.persona="Medical"
    this.stayService.getMedical().subscribe((hotel:any)=>{
      this.hotels=hotel;
    })
  }
  getStudentHotels(){
    this.persona="Student"
    this.stayService.getStudent().subscribe((hotel:any)=>{
      this.hotels=hotel;
    })
  }
  getTouristHotels(){
    this.persona="Tourist"
    this.stayService.getTourist().subscribe((hotel:any)=>{
      this.hotels=hotel;
    })
  }
  getAttractionsBusiness(){
    this.persona="Business"
    this.stayService.getBusinessAttraction().subscribe((attraction:any)=>{
      this.attractions=attraction;
    })
 }
 getAttractionsMedical(){
  this.persona="Medical"
    this.stayService.getMedicalAttraction().subscribe((attraction:any)=>{
      this.attractions=attraction;
    })
 }
 getAttractionsStudent(){
  this.persona="Student"
   this.stayService.getStudentAttraction().subscribe((attraction:any)=>{
     this.attractions=attraction;
   })
 }
 getAttractionsTourist(){
  this.persona="Tourist"
   this.stayService.getTouristAttraction().subscribe((attraction:any)=>{
     this.attractions=attraction;
   })
 }
 getAttractionsNature(){
   this.persona=""
  this.flagAttractions=[];
  this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
    let tempAttractions:[]=attraction
    for (let index = 0; index < tempAttractions.length; index++) {
      const element = tempAttractions[index];
      if(element["Type of attraction"]==="Nature"){
        this.flagAttractions.push(element);
      }
      
    }
    this.attractions=this.flagAttractions;
  })
 }
 getAttractionsGolfCourse(){
  this.persona=""
  this.flagAttractions=[];
  this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
    let tempAttractions:[]=attraction
    for (let index = 0; index < tempAttractions.length; index++) {
      const element = tempAttractions[index];
      if(element["Type of attraction"]==="Golf Course"){
        this.flagAttractions.push(element);
      }
      
    }
    this.attractions=this.flagAttractions;
  })
 }
 getAttractionsBeach(){
  this.persona=""
  this.flagAttractions=[];
  this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
    let tempAttractions:[]=attraction
    for (let index = 0; index < tempAttractions.length; index++) {
      const element = tempAttractions[index];
      if(element["Type of attraction"]==="Beach"){
        this.flagAttractions.push(element);
      }
      
    }
    this.attractions=this.flagAttractions;
  })
 }
 getAttractionsRestaurant(){
  this.persona=""
   this.flagAttractions=[];
  this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
    let tempAttractions:[]=attraction
    for (let index = 0; index < tempAttractions.length; index++) {
      const element = tempAttractions[index];
      if(element["Type of attraction"]==="Restaurant"){
        this.flagAttractions.push(element);
      }
      
    }
    this.attractions=this.flagAttractions;
  })
 }
 getAttractionsMuseum(){
  this.persona=""
  this.flagAttractions=[];
  this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
    let tempAttractions:[]=attraction
    for (let index = 0; index < tempAttractions.length; index++) {
      const element = tempAttractions[index];
      if(element["Type of attraction"]==="Museum"){
        this.flagAttractions.push(element);
      }
      
    }
    this.attractions=this.flagAttractions;
  })
 }
 getAttractionsAdventure(){
  this.persona=""
  this.flagAttractions=[];
  this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
    let tempAttractions:[]=attraction
    for (let index = 0; index < tempAttractions.length; index++) {
      const element = tempAttractions[index];
      if(element["Type of attraction"]==="Adventure"){
        this.flagAttractions.push(element);
      }
      
    }
    this.attractions=this.flagAttractions;
  })
 }
getAttractionsReligious(){
  this.persona=""
  this.flagAttractions=[];
  this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
    let tempAttractions:[]=attraction
    for (let index = 0; index < tempAttractions.length; index++) {
      const element = tempAttractions[index];
      if(element["Type of attraction"]==="Religious"){
        this.flagAttractions.push(element);
      }
      
    }
    this.attractions=this.flagAttractions;
  })
}
getAttractionsShopping(){
  this.persona=""
  this.flagAttractions=[];
  this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
    let tempAttractions:[]=attraction
    for (let index = 0; index < tempAttractions.length; index++) {
      const element = tempAttractions[index];
      if(element["Type of attraction"]==="Shopping"){
        this.flagAttractions.push(element);
      }
      
    }
    this.attractions=this.flagAttractions;
  })
}
getAttractionsExpo(){
  this.persona=""
  this.flagAttractions=[];
  this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
    let tempAttractions:[]=attraction
    for (let index = 0; index < tempAttractions.length; index++) {
      const element = tempAttractions[index];
      if(element["Type of attraction"]==="Expo"){
        this.flagAttractions.push(element);
      }
      
    }
    this.attractions=this.flagAttractions;
  })
}
getAttractionsIsland(){
  this.persona=""
  this.flagAttractions=[];
  this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
    let tempAttractions:[]=attraction
    for (let index = 0; index < tempAttractions.length; index++) {
      const element = tempAttractions[index];
      if(element["Type of attraction"]==="Island"){
        this.flagAttractions.push(element);
      }
      
    }
    this.attractions=this.flagAttractions;
  })
}
getAttractionsSightseeing(){
  this.persona=""
  this.flagAttractions=[];
  this.stayService.getByPlaceAttraction().subscribe((attraction:any)=>{
    let tempAttractions:[]=attraction
    for (let index = 0; index < tempAttractions.length; index++) {
      const element = tempAttractions[index];
      if(element["Type of attraction"]==="Sightseeing"){
        this.flagAttractions.push(element);
      }
      
    }
    this.attractions=this.flagAttractions;
  })
}
}

