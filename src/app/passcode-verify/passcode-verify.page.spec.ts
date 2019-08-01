import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasscodeVerifyPage } from './passcode-verify.page';

describe('PasscodeVerifyPage', () => {
  let component: PasscodeVerifyPage;
  let fixture: ComponentFixture<PasscodeVerifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasscodeVerifyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasscodeVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
