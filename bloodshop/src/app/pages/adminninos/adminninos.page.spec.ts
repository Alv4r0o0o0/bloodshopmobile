import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminninosPage } from './adminninos.page';

describe('AdminninosPage', () => {
  let component: AdminninosPage;
  let fixture: ComponentFixture<AdminninosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminninosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
