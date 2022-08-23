import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashTransComponent } from './cash-trans.component';

describe('CashTransComponent', () => {
  let component: CashTransComponent;
  let fixture: ComponentFixture<CashTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashTransComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
