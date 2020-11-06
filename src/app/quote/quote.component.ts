import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote( 0,'Shizzel shaz',  'Push yourself, because no one else is going to do it for you', 'Sharon',new Date()),
    new Quote( 1,'Abraham Lincon', 'Whatever i am or ever hope to be i owe it to my mother ', 'Jane',new Date()),
    new Quote( 2,'Martin Luther', 'Work hard in silence , let your succes shout', 'Gianna',new Date()),
    new Quote( 3,'Nadine Gold', 'The harder you work for something ,the greater you will fill when you achieve it', 'Favour',new Date()),

  ];  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
