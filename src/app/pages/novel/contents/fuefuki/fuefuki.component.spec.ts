import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuefukiComponent } from './fuefuki.component';

describe('FuefukiComponent', () => {
  let component: FuefukiComponent;
  let fixture: ComponentFixture<FuefukiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuefukiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuefukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
