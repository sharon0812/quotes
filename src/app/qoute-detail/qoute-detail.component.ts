import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.component.html',
  styleUrls: ['./qoute-detail.component.css']
})
export class QouteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }

  upVote(index){
    this.quote.upVote++
  }
  downVote(index){
    this.quote.downVote++
  }
  constructor() { }

  ngOnInit(): void {
  }

}
