import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NinosPage } from './ninos.page';

describe('NinosPage', () => {
  let component: NinosPage;
  let fixture: ComponentFixture<NinosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
