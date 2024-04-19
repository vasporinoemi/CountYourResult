import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kalkulator2Component } from './kalkulator2.component';

describe('Kalkulator2Component', () => {
  let component: Kalkulator2Component;
  let fixture: ComponentFixture<Kalkulator2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kalkulator2Component]
    });
    fixture = TestBed.createComponent(Kalkulator2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
