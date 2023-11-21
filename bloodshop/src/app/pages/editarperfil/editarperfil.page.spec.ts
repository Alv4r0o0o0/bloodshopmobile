import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarperfilPage } from './editarperfil.page';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('EditarperfilPage', () => {
  let component: EditarperfilPage;
  let fixture: ComponentFixture<EditarperfilPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [EditarperfilPage],
      providers: [
        {
          provide: ActivatedRoute ,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 'idzapatilla' })
            },
          },
        },
      SQLite],
    }).compileComponents();
    fixture = TestBed.createComponent(EditarperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
