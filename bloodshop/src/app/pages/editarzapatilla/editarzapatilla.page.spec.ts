import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarzapatillaPage } from './editarzapatilla.page';

describe('EditarzapatillaPage', () => {
  let component: EditarzapatillaPage;
  let fixture: ComponentFixture<EditarzapatillaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarzapatillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
