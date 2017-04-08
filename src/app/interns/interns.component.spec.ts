/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InternsComponent } from './interns.component';

describe('InternsComponent', () => {
  let component: InternsComponent;
  let fixture: ComponentFixture<InternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
