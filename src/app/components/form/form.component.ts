import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  handlerPhoneFormat(event: Event) {
    const inputElement = (event.target as HTMLInputElement);
    let str = inputElement.value.replace(/\D/g, '');

    if (str.length > 10) {
      str = str.slice(0, 10);
    }

    const match = str.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
      inputElement.value = `(${match[1]}) - ${match[2]} - ${match[3]} - ${match[4]}`;
    } else {
      inputElement.value = str;
    }
  }
}
