import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote( 'Push yourself, because no one else is going to do it for you',  'Sharon Anyango', 'Mary', new Date(2015,12,5)),
    new Quote('Whatever i am or ever hope to be i owe it to my mother', 'Abraham Lincon ', 'Jane', new Date(2019,08,10)),
    new Quote('Work hard in silence , let your succes shout', 'Jack Ma', 'Gianna', new Date(2020,10, 15)),
    new Quote('The harder you work for something ,the greater you will fill when you achieve it', 'Keylee Vee', 'Favour',new Date(2016,11,12)),

  ];   
  addNewQuote (quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completedate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }
  completeDate(complete: boolean){
    
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
