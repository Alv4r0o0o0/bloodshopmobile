import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvidarclavePage } from './olvidarclave.page';

describe('OlvidarclavePage', () => {
  let component: OlvidarclavePage;
  let fixture: ComponentFixture<OlvidarclavePage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(OlvidarclavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
