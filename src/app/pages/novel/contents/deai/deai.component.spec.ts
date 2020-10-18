import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeaiComponent} from './deai.component';

describe('DeaiComponent', () => {
  let component: DeaiComponent;
  let fixture: ComponentFixture<DeaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeaiComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
