import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css',
})
export class TemplateDriven {

   register(data: any) {
    console.log(data);
  }

  onLogin(formValue: any) {
    console.log(formValue);
  }

}
