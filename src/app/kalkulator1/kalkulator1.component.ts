import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-kalkulator1',
  templateUrl: './kalkulator1.component.html',
  styleUrls: ['./kalkulator1.component.css'],
})
export class Kalkulator1Component {
  eredmenyKalkulator: FormGroup;

  constructor() {
    this.eredmenyKalkulator = new FormGroup({
      elso: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(30),
      ]),
      masodik: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(15),
      ]),
      harmadik: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(30),
      ]),
      negyedik: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(45),
      ]),
      szobeli: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(30),
      ]),
      szazalek: new FormControl({ value: '', disabled: true }),
      erdemjegy: new FormControl({ value: '', disabled: true }),
    });
  }

  onSubmit() {
    let maxPont = 150;
    let elertPont =
      this.eredmenyKalkulator.value.elso +
      this.eredmenyKalkulator.value.masodik +
      this.eredmenyKalkulator.value.harmadik +
      this.eredmenyKalkulator.value.negyedik +
      this.eredmenyKalkulator.value.szobeli;

    let szazalek = (elertPont / maxPont) * 100;
    let erdemjegy;

    if (szazalek >= 60) erdemjegy = 'jeles (5)';
    if (szazalek >= 47 && szazalek < 60) erdemjegy = 'jó (4)';
    if (szazalek >= 33 && szazalek < 47) erdemjegy = 'közepes (3)';
    if (szazalek >= 25 && szazalek < 33) erdemjegy = 'elégséges (2)';
    if (szazalek < 25) erdemjegy = 'elégtelen (1)';

    this.eredmenyKalkulator.patchValue({
      szazalek: szazalek.toFixed(0) + '%',
    });
    this.eredmenyKalkulator.patchValue({ erdemjegy: erdemjegy });
    console.log(szazalek);
    console.log(erdemjegy);
  }

  torol() {
    this.eredmenyKalkulator.reset();
  }
}
