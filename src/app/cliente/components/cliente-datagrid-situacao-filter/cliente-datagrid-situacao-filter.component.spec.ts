import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDatagridSituacaoFilterComponent } from './cliente-datagrid-situacao-filter.component';

describe('ClienteDatagridSituacaoFilterComponent', () => {
  let component: ClienteDatagridSituacaoFilterComponent;
  let fixture: ComponentFixture<ClienteDatagridSituacaoFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDatagridSituacaoFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDatagridSituacaoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
