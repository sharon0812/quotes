import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote( 'Push yourself, because no one else is going to do it for you',  'Sharon Anyango', 'Mary', new Date(2020,7,11)),
    new Quote('Whatever i am or ever hope to be i owe it to my mother', 'Abraham Lincon ', 'Jane', new Date(2020,6,9)),
    new Quote('Work hard in silence , let your success shout', 'Jack Ma', 'Gianna', new Date(2019,3,7)),
    new Quote('The harder you work for something ,the greater you will fill when you achieve it', 'Keylee Vee', 'Favour',new Date(2020,12,10)),

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
  upVotes(index){
    this.quotes[index].upVote++
  }
  downVotes(index){
    this.quotes[index].downVote++
  }  
  
  
  completeDate(complete: boolean){
    
  }
  high:number;
  author:string;
  submittedBy:String;
  quote:String;
  low:number;
  day:any;

  highVotes() {
    this.high = 0;
  for (let i = 0;i<this.quotes.length;i++){
    if(this.quotes[i].upVote>this.high){
      this.high = this.quotes[i].upVote;
      this.author = this.quotes[i].author;
      this.submittedBy = this.quotes[i].submittedBy;
      this.quote = this.quotes[i].quote;
      this.low = this.quotes[i].downVote;
      this.day = this.quotes[i].since;
    }
  }
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}
