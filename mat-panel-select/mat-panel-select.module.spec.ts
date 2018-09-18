import { MatPanelSelectModule } from './mat-panel-select.module';

describe('MatPanelSelectModule', () => {
  let matPanelSelectModule: MatPanelSelectModule;

  beforeEach(() => {
    matPanelSelectModule = new MatPanelSelectModule();
  });

  it('should create an instance', () => {
    expect(matPanelSelectModule).toBeTruthy();
  });
});
