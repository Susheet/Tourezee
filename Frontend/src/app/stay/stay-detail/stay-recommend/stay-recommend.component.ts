import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stay-recommend',
  templateUrl: './stay-recommend.component.html',
  styleUrls: ['./stay-recommend.component.css']
})
export class StayRecommendComponent implements OnInit {
 @Input() hotelName:any
 @Input() hotelCountry:any
 @Input() hotelCity:any
 stayList:any;
 urlSimilar:any;
   
  constructor(private http: HttpClient) {
    
  
  }
  ngOnInit(): void {
    this.urlSimilar=`https://tourezee.herokuapp.com/similar_hotels?country=${this.hotelCountry}&city=${this.hotelCity}&hotelName=${this.hotelName}`
    this.http.get(this.urlSimilar).subscribe((list:any)=>{
      this.stayList=list;
    });

  }
  

}
