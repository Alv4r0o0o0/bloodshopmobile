import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Detailhombre1Page } from './detailhombre1.page';

describe('Detailhombre1Page', () => {
  let component: Detailhombre1Page;
  let fixture: ComponentFixture<Detailhombre1Page>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [ActivatedRoute]
    }).compileComponents();
    
    fixture = TestBed.createComponent(Detailhombre1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
