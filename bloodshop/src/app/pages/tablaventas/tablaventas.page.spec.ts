import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaventasPage } from './tablaventas.page';

describe('TablaventasPage', () => {
  let component: TablaventasPage;
  let fixture: ComponentFixture<TablaventasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TablaventasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
