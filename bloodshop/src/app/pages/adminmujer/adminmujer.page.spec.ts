import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminmujerPage } from './adminmujer.page';

describe('AdminmujerPage', () => {
  let component: AdminmujerPage;
  let fixture: ComponentFixture<AdminmujerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminmujerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
