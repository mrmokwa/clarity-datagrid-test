import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDatagridFilterNomeComponent } from './cliente-datagrid-filter-nome.component';

describe('ClienteDatagridFilterNomeComponent', () => {
  let component: ClienteDatagridFilterNomeComponent;
  let fixture: ComponentFixture<ClienteDatagridFilterNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDatagridFilterNomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDatagridFilterNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
