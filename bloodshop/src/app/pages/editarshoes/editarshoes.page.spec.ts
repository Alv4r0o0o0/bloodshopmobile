import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { EditarshoesPage } from './editarshoes.page';

describe('EditarshoesPage', () => {
  let component: EditarshoesPage;
  let fixture: ComponentFixture<EditarshoesPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [ActivatedRoute]
    }).compileComponents();
    
    fixture = TestBed.createComponent(EditarshoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
