import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StayService } from '../../stay.service';

@Component({
  selector: 'app-stay-item',
  templateUrl: './stay-item.component.html',
  styleUrls: ['./stay-item.component.scss']
})
export class StayItemComponent implements OnInit {
  @Input() hotel : any
  Arr = Array; 
  num:number 
  constructor(private router:Router,private stayService:StayService) { }

  ngOnInit(): void {
    this.num=+this.hotel.Stars;
  }
  
  onDetails(){
    this.stayService.hotelSelected.emit(this.hotel);
  }
}
