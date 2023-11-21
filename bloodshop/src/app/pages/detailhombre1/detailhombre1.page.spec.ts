import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Detailhombre1Page } from './detailhombre1.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('Detailhombre1Page', () => {
  let component: Detailhombre1Page;
  let fixture: ComponentFixture<Detailhombre1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detailhombre1Page],
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

    fixture = TestBed.createComponent(Detailhombre1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
