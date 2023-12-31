import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AgregarzapatillaPage } from './agregarzapatilla.page';

describe('AgregarzapatillaPage', () => {
  let component: AgregarzapatillaPage;
  let fixture: ComponentFixture<AgregarzapatillaPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AgregarzapatillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
