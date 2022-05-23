import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-ruta2',
  templateUrl: './ruta2.component.html',
  styleUrls: ['./ruta2.component.css']
})


export class Ruta2Component implements OnInit {


  formulario = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    rating: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, this.mailValidator()]),
    description: new FormControl('', Validators.required),
    released: new FormControl('', Validators.required),
    platform: new FormControl('', Validators.required),
  });

  submit = {};


  constructor() { }


  ngOnInit(): void {
  }
  onSubmit() {
    this.formulario.get('rating')?.disable()
    console.warn(this.formulario.value);
    return this.submit = this.formulario.value;
  }


  mailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const mailFormControl = control as FormControl
      const email = mailFormControl.value
      if (email?.includes('@primary.com.ar')) {
        return null
      } else {
        return { mailError: true }
      }
    };
  }
}





