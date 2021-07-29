import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StayService } from '../../stay.service';

@Component({
  selector: 'app-attraction-item',
  templateUrl: './attraction-item.component.html',
  styleUrls: ['./attraction-item.component.scss']
})
export class AttractionItemComponent implements OnInit {
  @Input() attraction : any
  recommendedAttractions:any
  seeMore=false;
  constructor(private stayService:StayService,private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSeeMore(){
    this.seeMore=true;
    this.http.get(`https://tourezee.herokuapp.com/similar_attractions?country=${this.attraction.Country}&city=${this.attraction.City}&attractionName=${this.attraction.Name}`).subscribe((attractions:any)=>{
      this.recommendedAttractions=attractions;
    })
  }
  onSeeLess(){
    this.seeMore=false;
  }

}
