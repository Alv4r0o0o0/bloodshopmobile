import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarshoesPage } from './editarshoes.page';

describe('EditarshoesPage', () => {
  let component: EditarshoesPage;
  let fixture: ComponentFixture<EditarshoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarshoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});