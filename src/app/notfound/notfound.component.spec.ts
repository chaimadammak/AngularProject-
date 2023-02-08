import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOTFoundComponent } from './notfound.component';

describe('NOTFoundComponent', () => {
  let component: NOTFoundComponent;
  let fixture: ComponentFixture<NOTFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NOTFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NOTFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
