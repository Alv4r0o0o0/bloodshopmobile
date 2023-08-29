import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Detailninos1Page } from './detailninos1.page';

describe('Detailninos1Page', () => {
  let component: Detailninos1Page;
  let fixture: ComponentFixture<Detailninos1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Detailninos1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
