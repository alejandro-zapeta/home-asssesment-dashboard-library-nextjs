export type AssetBase = {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
};

export type Kpi = AssetBase & {
  businessQuestions: string[];
  metricIds: string[];
  calculation: string;
  visualsAvailable: string[];
  affiliateApplicability: string[];
};

export type Layout = AssetBase & {
  amountOfPages: number;
  kpisBeingUsed: string[]; // kpi ids
};

export type Storyboard = AssetBase & {
  coupledKpisFilters: string[];
  applicableAffiliates: string[];
};

export type User = {
  idUser: string;
  nameArea: string;
  name: string;
  email: string;
  pwd: string;
  hasAccess: boolean;
  layouts: Layout[];
  kpis: Kpi[];
  storyboards: Storyboard[];
};
