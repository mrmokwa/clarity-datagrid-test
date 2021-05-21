import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedvendDatagridFilterClienteComponent } from './pedvend-datagrid-filter-cliente.component';

describe('PedvendDatagridFilterClienteComponent', () => {
  let component: PedvendDatagridFilterClienteComponent;
  let fixture: ComponentFixture<PedvendDatagridFilterClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedvendDatagridFilterClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedvendDatagridFilterClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
