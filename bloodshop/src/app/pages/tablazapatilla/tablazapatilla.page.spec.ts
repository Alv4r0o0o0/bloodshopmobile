import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablazapatillaPage } from './tablazapatilla.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('TablazapatillaPage', () => {
  let component: TablazapatillaPage;
  let fixture: ComponentFixture<TablazapatillaPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(TablazapatillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
