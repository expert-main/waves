import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarafinaPage } from './farafina.page';

describe('FarafinaPage', () => {
  let component: FarafinaPage;
  let fixture: ComponentFixture<FarafinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarafinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarafinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
