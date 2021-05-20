import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDatagridComponent } from './cliente-datagrid.component';

describe('ClienteDatagridComponent', () => {
  let component: ClienteDatagridComponent;
  let fixture: ComponentFixture<ClienteDatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDatagridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
