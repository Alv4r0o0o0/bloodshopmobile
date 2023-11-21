import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, ActivatedRouteSnapshot } from '@angular/router';
import { EditarshoesPage } from './editarshoes.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { of } from 'rxjs'; // Importa 'of' desde 'rxjs'

describe('EditarshoesPage', () => {
  let component: EditarshoesPage;
  let fixture: ComponentFixture<EditarshoesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarshoesPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 'idzapatilla' })
            },
            queryParams: of({}),
          },
        },
        SQLite
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarshoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});