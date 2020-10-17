import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuetanohaComponent } from './fuetanoha.component';

describe('FuetanohaComponent', () => {
  let component: FuetanohaComponent;
  let fixture: ComponentFixture<FuetanohaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuetanohaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuetanohaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
