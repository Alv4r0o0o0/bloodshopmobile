import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Detailmujer1Page } from './detailmujer1.page';

describe('Detailmujer1Page', () => {
  let component: Detailmujer1Page;
  let fixture: ComponentFixture<Detailmujer1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Detailmujer1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
