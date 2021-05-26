import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDatagridFilterDocumentoComponent } from './cliente-datagrid-filter-documento.component';

describe('ClienteDatagridFilterDocumentoComponent', () => {
  let component: ClienteDatagridFilterDocumentoComponent;
  let fixture: ComponentFixture<ClienteDatagridFilterDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDatagridFilterDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDatagridFilterDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
