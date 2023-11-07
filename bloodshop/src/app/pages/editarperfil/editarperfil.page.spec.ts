import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { EditarperfilPage } from './editarperfil.page';


describe('EditarperfilPage', () => {
  let component: EditarperfilPage;
  let fixture: ComponentFixture<EditarperfilPage>;

  beforeEach(async() => {
    describe('SomeComponent', () => {

      const fakeActivatedRoute = {
        snapshot: { data: { id="" , nombre="", } }} as ActivatedRoute;

    await TestBed.configureTestingModule({
      providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute} ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(EditarperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
