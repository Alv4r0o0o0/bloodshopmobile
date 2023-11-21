import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MujerPage } from './mujer.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DatePipe } from '@angular/common';

describe('MujerPage', () => {
  let component: MujerPage;
  let fixture: ComponentFixture<MujerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MujerPage],
      providers: [SQLite, DatePipe]
    }).compileComponents();

    fixture = TestBed.createComponent(MujerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
