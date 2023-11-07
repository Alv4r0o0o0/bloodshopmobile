import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Editarperfil1Page } from './editarperfil1.page';

describe('Editarperfil1Page', () => {
  let component: Editarperfil1Page;
  let fixture: ComponentFixture<Editarperfil1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Editarperfil1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
