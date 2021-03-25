import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedvendDetalhesComponent } from './pedvend-detalhes.component';

describe('PedvendDetalhesComponent', () => {
  let component: PedvendDetalhesComponent;
  let fixture: ComponentFixture<PedvendDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedvendDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedvendDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
