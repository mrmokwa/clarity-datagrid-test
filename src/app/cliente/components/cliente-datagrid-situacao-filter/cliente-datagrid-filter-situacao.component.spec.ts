import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDatagridFilterSituacaoComponent } from './cliente-datagrid-filter-situacao.component';

describe('ClienteDatagridFilterSituacaoComponent', () => {
  let component: ClienteDatagridFilterSituacaoComponent;
  let fixture: ComponentFixture<ClienteDatagridFilterSituacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteDatagridFilterSituacaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDatagridFilterSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
