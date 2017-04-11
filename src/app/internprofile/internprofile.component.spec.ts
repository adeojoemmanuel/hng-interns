/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InternprofileComponent } from './internprofile.component';

describe('InternprofileComponent', () => {
  let component: InternprofileComponent;
  let fixture: ComponentFixture<InternprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
