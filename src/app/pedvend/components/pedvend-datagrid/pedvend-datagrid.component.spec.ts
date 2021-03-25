import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedvendDatagridComponent } from './pedvend-datagrid.component';

describe('PedvendDatagridComponent', () => {
  let component: PedvendDatagridComponent;
  let fixture: ComponentFixture<PedvendDatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedvendDatagridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedvendDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
