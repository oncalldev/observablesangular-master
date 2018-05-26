import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Student } from './models/student';
import { OrderBook } from './models/orderbook';
import { Rates } from './models/rates';
import { LatestPrices } from './models/latestprices';
import { Squares } from './models/square';

@Injectable()
export class ApitestService {

  languages: string = "http://localhost:5555/languages";
  student: string = "http://localhost:5555/student";
  orderBook: string = "http://localhost:5555/orderbook";
  rates: string = "http://localhost:5555/rates";
  latestprices: string = "http://localhost:5555/latestprices";
  squares : string = "http://localhost:5555/squares";

  constructor(private httpClient: HttpClient) { }

  getLanguages(): Observable<any> {
    return this.httpClient.get(this.languages);
  }

  getStudent(): Observable<Student> {
    return this.httpClient.get<Student>(this.student);
  }

  getOrderBook(): Observable<OrderBook> {
    return this.httpClient.get<OrderBook>(this.orderBook);
  }

  getRates(): Observable<Rates> {
    return this.httpClient.get<Rates>(this.rates);
  }

  getLatestPrices(): Observable<LatestPrices> {
    return this.httpClient.get<LatestPrices>(this.latestprices);
  }

  getSquares(): Observable<Squares> {
    return this.httpClient.get<Squares>(this.squares);
  }

  getSquare(id: string) : Observable<Squares> {
    return this.httpClient.get<Squares>(this.squares);
  }
}
