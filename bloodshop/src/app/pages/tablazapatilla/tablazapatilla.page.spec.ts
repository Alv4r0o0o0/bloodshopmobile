import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablazapatillaPage } from './tablazapatilla.page';

describe('TablazapatillaPage', () => {
  let component: TablazapatillaPage;
  let fixture: ComponentFixture<TablazapatillaPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(TablazapatillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
