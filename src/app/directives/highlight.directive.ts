import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

@HostListener('mouseenter') onMouseEnter(){
  this.element.nativeElement.style.fontSize = '1.2em';
}

@HostListener('mouseleave') onMouseLeave(){
  this.element.nativeElement.style.fontSize = '1em';
}

  constructor( private element : ElementRef) { 
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}
