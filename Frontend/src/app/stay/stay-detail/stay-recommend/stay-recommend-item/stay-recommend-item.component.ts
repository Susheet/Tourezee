import { Component, Input, OnInit } from '@angular/core';
import { StayService } from 'src/app/stay/stay.service';

@Component({
  selector: 'app-stay-recommend-item',
  templateUrl: './stay-recommend-item.component.html',
  styleUrls: ['./stay-recommend-item.component.scss']
})
export class StayRecommendItemComponent implements OnInit {
  @Input() hotel:any
  Arr = Array; 
  num:number 
  constructor(private stayService:StayService) { }

  ngOnInit(): void {
    this.num=+this.hotel.Stars;
  }
  onDetails(){
    this.stayService.hotelSelected.emit(this.hotel);
  }

}
