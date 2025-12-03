import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-employee-lifecycle',
  imports: [],
  template: ` 
    <h2>{{employee.name}} Lifecycle Hooks Demo</h2>
    <input #inputBox placeholder="Edit Employee Name" />
    <ng-content></ng-content>
  `,
  styleUrl: './employee-lifecycle.css',
})
export class EmployeeLifecycle {

  @Input() employee!: any;
  @ViewChild('inputBox') inputBox!: ElementRef;

  prevName: string = '';

  constructor() {
    console.log("Constructor called: Dependency Injection done");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called: Input properties changed", changes['employee']);
  }

  ngOnInit() {
    console.log("ngOnInit called: Component initialized with employee");
  }

  ngDoCheck() {
    if (this.employee.name !== this.prevName) {
      console.log("ngDoCheck: Name changed");
      this.prevName = this.employee.name;
    }
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit: content projected");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked: projected content checked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit: view initalized");
    this.inputBox.nativeElement.focus();
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked: view checked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy: component about to be destroyed");
  }

}
