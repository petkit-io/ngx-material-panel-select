import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPanelSelectComponent } from './mat-panel-select.component';

describe('MatPanelSelectComponent', () => {
  let component: MatPanelSelectComponent;
  let fixture: ComponentFixture<MatPanelSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPanelSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPanelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
