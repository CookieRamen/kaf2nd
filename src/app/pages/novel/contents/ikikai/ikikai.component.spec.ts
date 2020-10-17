import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkikaiComponent } from './ikikai.component';

describe('IkikaiComponent', () => {
  let component: IkikaiComponent;
  let fixture: ComponentFixture<IkikaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkikaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkikaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
