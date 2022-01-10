import { criticalProcessReducer } from 'views/production/configuration/criticalProcess/store/reducers';
import { lineReducer } from 'views/production/configuration/line/store/reducers';
import { productionProcessReducer } from 'views/production/configuration/productionProcess/store/reducers';
import { productPartReducer } from 'views/production/configuration/productParts/store/reducers';
import { SampleTypeReducer } from 'views/production/configuration/typeManagement/sampleType/store/reducers';
import { ZoneReducer } from 'views/production/configuration/zone/store/reducers';

export const productionReducers = {
  lineReducer,
  SampleTypeReducer,
  ZoneReducer,
  productPartReducer,
  productionProcessReducer,
  criticalProcessReducer
};
