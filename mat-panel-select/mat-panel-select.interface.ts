export interface IMatPanelSelectData {
  title: string;
  children: IMatPanelSelectItem[];
}

export interface IMatPanelSelectItem {
  text: string;
}

export type IMatPanelSelectType = 'grid' | 'list';

