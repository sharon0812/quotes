import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QouteDetailComponent } from './qoute-detail/qoute-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';
import { FavourlightDirective } from './favourlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QouteDetailComponent,
    QuoteFormComponent,
    DateCountPipe,
    FavourlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
