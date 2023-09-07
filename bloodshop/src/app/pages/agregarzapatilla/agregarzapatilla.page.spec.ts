import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarzapatillaPage } from './agregarzapatilla.page';

describe('AgregarzapatillaPage', () => {
  let component: AgregarzapatillaPage;
  let fixture: ComponentFixture<AgregarzapatillaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarzapatillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
