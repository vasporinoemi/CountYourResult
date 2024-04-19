import { Component } from '@angular/core';

@Component({
  selector: 'app-kalkulator2',
  templateUrl: './kalkulator2.component.html',
  styleUrls: ['./kalkulator2.component.css'],
})
export class Kalkulator2Component {
  szazalek?: string;
  erdemjegy?: string;

  onSubmit(eredmenyKalkulator: any) {
    let maxPont = 150;
    let elertPont =
      eredmenyKalkulator.value.elso +
      eredmenyKalkulator.value.masodik +
      eredmenyKalkulator.value.harmadik +
      eredmenyKalkulator.value.negyedik +
      eredmenyKalkulator.value.szobeli;

    let szazalek = (elertPont / maxPont) * 100;
    let erdemjegy;

    if (szazalek >= 60) erdemjegy = 'jeles (5)';
    if (szazalek >= 47 && szazalek < 60) erdemjegy = 'jó (4)';
    if (szazalek >= 33 && szazalek < 47) erdemjegy = 'közepes (3)';
    if (szazalek >= 25 && szazalek < 33) erdemjegy = 'elégséges (2)';
    if (szazalek < 25) erdemjegy = 'elégtelen (1)';

    this.szazalek = szazalek.toFixed(0) + '%';
    this.erdemjegy = erdemjegy;
  }

  torol(eredmenyKalkulator: any) {
    eredmenyKalkulator.reset();
  }
}
