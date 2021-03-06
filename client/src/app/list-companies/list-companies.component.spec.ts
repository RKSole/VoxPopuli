import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompaniesComponent } from './list-companies.component';

describe('ListCompaniesComponent', () => {
  let component: ListCompaniesComponent;
  let fixture: ComponentFixture<ListCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
