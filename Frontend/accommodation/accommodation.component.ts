import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent implements OnInit {
  public hotels : any;
  constructor() { 
    this.hotels=[
      {
        "id":1,
        "name": "Holiday inn",
        "image": "https://i1.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/09/SINGAPORE-HEADER.jpg?fit=1300%2C731&ssl=1",
        "rating": 4.5 ,
        "price": 15000,
        "stars":5,
        "review":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      },
      {
        "id":2,
        "name": "Marina Bay Sands",
        "image": "https://i1.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/09/SINGAPORE-HEADER.jpg?fit=1300%2C731&ssl=1",
        "rating": 4.5,
        "price": 25000,
        "stars":5,
        "review":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      },
      {
        "id":3,
        "name": "ABC Hotel",
        "image": "https://i1.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/09/SINGAPORE-HEADER.jpg?fit=1300%2C731&ssl=1",
        "rating": 3,
        "price": 7000,
        "stars":4,
        "review":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      },
      {
        "id":4,
        "name": "XYZ",
        "image": "https://i1.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/09/SINGAPORE-HEADER.jpg?fit=1300%2C731&ssl=1",
        "rating": 3.5,
        "price": 5000,
        "stars":3,
        "review":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      }
    ]
  }

  ngOnInit(): void {
  }

}
