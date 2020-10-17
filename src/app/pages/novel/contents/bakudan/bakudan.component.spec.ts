import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakudanComponent } from './bakudan.component';

describe('BakudanComponent', () => {
  let component: BakudanComponent;
  let fixture: ComponentFixture<BakudanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakudanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakudanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
