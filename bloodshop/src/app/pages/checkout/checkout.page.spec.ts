import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutPage } from './checkout.page';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { of } from 'rxjs';

describe('CheckoutPage', () => {
  let component: CheckoutPage;
  let fixture: ComponentFixture<CheckoutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 'idzapatilla' })
            },
            queryParams: of({}), // Simula un observable usando of de RxJS
          },
        },
        SQLite,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});