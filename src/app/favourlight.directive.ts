import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appFavourlight]'
})
export class FavourlightDirective {

  constructor(private elem:ElementRef) {  this.elem.nativeElement.style.color='green';
}
}
