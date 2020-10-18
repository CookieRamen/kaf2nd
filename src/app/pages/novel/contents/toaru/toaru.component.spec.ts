import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ToaruComponent} from './toaru.component';

describe('ToaruComponent', () => {
  let component: ToaruComponent;
  let fixture: ComponentFixture<ToaruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToaruComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
