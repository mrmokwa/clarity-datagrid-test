import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridFilterDateComponent } from './datagrid-filter-date.component';

describe('DatagridFilterDateComponent', () => {
  let component: DatagridFilterDateComponent;
  let fixture: ComponentFixture<DatagridFilterDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagridFilterDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridFilterDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
