import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridFilterComponent } from './datagrid-filter.component';

describe('DatagridFilterStringComponent', () => {
  let component: DatagridFilterComponent;
  let fixture: ComponentFixture<DatagridFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatagridFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
