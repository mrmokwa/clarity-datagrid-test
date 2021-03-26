import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedvendDatagridFilterSituacaoComponent } from './pedvend-datagrid-filter-situacao.component';

describe('PedvendDatagridFilterSituacaoComponent', () => {
  let component: PedvendDatagridFilterSituacaoComponent;
  let fixture: ComponentFixture<PedvendDatagridFilterSituacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedvendDatagridFilterSituacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedvendDatagridFilterSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
