import { Component, OnInit } from '@angular/core';
import { ApitestService } from './apitest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private apitest: ApitestService) { }

  ngOnInit() {
    // this.getLanguages();
    // this.getStudent();
    // this.getStudentFat();
    // this.getOrderBook();
    // this.getRates();
    // this.getLatestPrices();
    // this.getSquares();
    // this.getSquare("X7");
  }

  getLanguages() {
    this.apitest.getLanguages().subscribe(function (data) {
      console.log("Languages", data);
    })
  }

  getStudent() {
    this.apitest.getStudent().subscribe(function (data) {
      console.log("Student", data);
    })
  }

  getStudentFat() {
    this.apitest.getStudent().subscribe( data=> console.log("Student:", data));
  }

  getOrderBook() {
    this.apitest.getOrderBook().subscribe(function (data) {
      console.log("Order Book", data);
    })
  }

  getRates() {
    this.apitest.getRates().subscribe(function (data) {
      console.log("Rates", data);
    })
  }

  getLatestPrices() {
    this.apitest.getLatestPrices().subscribe(function (data) {
      console.log("Latest Prices", data);
    })
  }

  getSquares() {
    this.apitest.getSquares().subscribe(data => console.log("Square:", data));
  }

  getSquare(id:string) {
    this.apitest.getSquare("X7").subscribe(data => console.log("Square[X7]", data));
  }
}
