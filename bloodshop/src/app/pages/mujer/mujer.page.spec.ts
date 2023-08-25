import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MujerPage } from './mujer.page';

describe('MujerPage', () => {
  let component: MujerPage;
  let fixture: ComponentFixture<MujerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MujerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
