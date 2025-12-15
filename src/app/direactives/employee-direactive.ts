import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmployeeDireactive]'
})
export class EmployeeDireactive {

  constructor(private el: ElementRef){}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

  // use diractive <p appEmployeeDirective>Hover me</p>
}
