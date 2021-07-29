import { Component, Input, OnInit } from '@angular/core';
import { StayService } from 'src/app/stay/stay.service';

@Component({
  selector: 'app-attraction-item-detail',
  templateUrl: './attraction-item-detail.component.html',
  styleUrls: ['./attraction-item-detail.component.scss']
})
export class AttractionItemDetailComponent implements OnInit {
  @Input() attraction:any
  constructor(private stayService:StayService) { 
  }

  ngOnInit(): void {
    
  }
  onSeeMore(){
    
  }
}
