import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Detailhombre2Page } from './detailhombre2.page';

describe('Detailhombre2Page', () => {
  let component: Detailhombre2Page;
  let fixture: ComponentFixture<Detailhombre2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Detailhombre2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
