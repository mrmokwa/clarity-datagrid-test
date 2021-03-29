import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedvendDatagridFilterEntradaComponent } from './pedvend-datagrid-filter-entrada.component';

describe('PedvendDatagridFilterEntradaComponent', () => {
  let component: PedvendDatagridFilterEntradaComponent;
  let fixture: ComponentFixture<PedvendDatagridFilterEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedvendDatagridFilterEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedvendDatagridFilterEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
