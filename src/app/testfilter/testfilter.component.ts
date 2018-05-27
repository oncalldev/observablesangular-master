import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { filter, tap, flatMap } from 'rxjs/operators';
import { Person } from '../models/person';

@Component({
  selector: 'app-testfilter',
  templateUrl: './testfilter.component.html',
  styleUrls: ['./testfilter.component.css']
})
export class TestfilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.doFilter();
  }

  doFilter(){


//emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
const source = from([
            { id: 1, name: 'Joe', age: 31 }, 
            { id: 2, name: 'Bob', age: 25 },
            { id: 3, name: 'Jane', age: 30 },
            { id: 4, name: 'Mary', age: 30 }
          ]);
//filter out people with age under 30
const example = source.pipe(filter(person => person.age >= 30 || person.name == 'Bob'));
//output: "Over 30: Joe"
const subscribe = example.subscribe(val => console.log(`Over 30: ${val.name}`));
  };
}
