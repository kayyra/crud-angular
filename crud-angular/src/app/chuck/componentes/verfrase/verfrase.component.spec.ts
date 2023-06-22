import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfraseComponent } from './verfrase.component';

describe('VerfraseComponent', () => {
  let component: VerfraseComponent;
  let fixture: ComponentFixture<VerfraseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerfraseComponent]
    });
    fixture = TestBed.createComponent(VerfraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
