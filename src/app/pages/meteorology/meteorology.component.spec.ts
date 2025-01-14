import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorologyComponent } from './meteorology.component';

describe('MeteorologyComponent', () => {
  let component: MeteorologyComponent;
  let fixture: ComponentFixture<MeteorologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteorologyComponent]
    });
    fixture = TestBed.createComponent(MeteorologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
