import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.loginForm.valueChanges.subscribe((changes) =>
      console.log('Form changes', this.loginForm)
    );
  }

  public onSubmit() {
    console.log('Submitting form', this.loginForm);
  }
}
