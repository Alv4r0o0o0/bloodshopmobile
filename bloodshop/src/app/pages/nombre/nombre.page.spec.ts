import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NombrePage } from './nombre.page';

describe('NombrePage', () => {
  let component: NombrePage;
  let fixture: ComponentFixture<NombrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NombrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
