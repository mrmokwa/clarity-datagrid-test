import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridFilterStringComponent } from './datagrid-filter-string.component';

describe('DatagridFilterStringComponent', () => {
  let component: DatagridFilterStringComponent;
  let fixture: ComponentFixture<DatagridFilterStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagridFilterStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridFilterStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
