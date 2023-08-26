import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Detailhombre1Page } from './detailhombre1.page';

describe('Detailhombre1Page', () => {
  let component: Detailhombre1Page;
  let fixture: ComponentFixture<Detailhombre1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Detailhombre1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
