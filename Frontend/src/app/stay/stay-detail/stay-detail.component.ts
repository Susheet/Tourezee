import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StayService } from '../stay.service';

@Component({
  selector: 'app-stay-detail',
  templateUrl: './stay-detail.component.html',
  styleUrls: ['./stay-detail.component.css']
})
export class StayDetailComponent implements OnInit {
  @Input() hotel:any
  Arr = Array; 
  num:number
  
  constructor(private stayService:StayService,private router:Router) { 
  
  }
 
  ngOnInit(): void {
    this.num=+this.hotel.Stars;
  }
  
}
