import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedvendDatagridDetailComponent } from './pedvend-datagrid-detail.component';

describe('PedvendDatagridDetailComponent', () => {
  let component: PedvendDatagridDetailComponent;
  let fixture: ComponentFixture<PedvendDatagridDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedvendDatagridDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedvendDatagridDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
