import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEmployeeDireactive]'
})
export class EmployeeDireactive {

  constructor(private el: ElementRef) {
    el.nativeElement.style.background = '#ca3030ff';
    el.nativeElement.style.padding = '10px';
    el.nativeElement.style.borderRadius = '5px';
   }

}
