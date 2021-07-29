import { Component, OnInit, ViewChild } from '@angular/core';
import { StayService } from '../stay.service';

@Component({
  selector: 'app-stay-filters',
  templateUrl: './stay-filters.component.html',
  styleUrls: ['./stay-filters.component.css']
})
export class StayFiltersComponent implements OnInit {
  isChecked : boolean;

  constructor(private stayService:StayService) { 
    
  }
  
  ngOnInit(): void {

  }

}
