import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HombrePage } from './hombre.page';
import { DatePipe } from '@angular/common';

describe('HombrePage', () => {
  let component: HombrePage;
  let fixture: ComponentFixture<HombrePage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [HombrePage],
      providers: [SQLite, DatePipe]
    }).compileComponents();
    
    fixture = TestBed.createComponent(HombrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
