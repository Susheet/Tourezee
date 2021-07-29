import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { StayService } from './stay.service';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit {

  selectedHotel:any
  
  constructor(private router:Router,private stayService:StayService,
    ) { }

  ngOnInit(): void {
      this.stayService.hotelSelected.subscribe((hotel:any)=>{
        this.selectedHotel=hotel;
      })
  }
  goBack(){
    this.selectedHotel="";
  }
  


}
