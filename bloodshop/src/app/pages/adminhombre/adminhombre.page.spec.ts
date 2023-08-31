import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminhombrePage } from './adminhombre.page';

describe('AdminhombrePage', () => {
  let component: AdminhombrePage;
  let fixture: ComponentFixture<AdminhombrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminhombrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
