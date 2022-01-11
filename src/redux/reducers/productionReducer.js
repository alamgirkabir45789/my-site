import { lineReducer } from 'views/production/configuration/line/store/reducers';
import { productionProcessReducer } from 'views/production/configuration/productionProcess/store/reducers';
import { productPartReducer } from 'views/production/configuration/productParts/store/reducers';
import { incompleteTypeReducer } from 'views/production/configuration/typeManagement/incompleteType/store/reducers';
import { rejectTypeReducer } from 'views/production/configuration/typeManagement/rejectType/store/reducers';
import { SampleTypeReducer } from 'views/production/configuration/typeManagement/sampleType/store/reducers';
import { ZoneReducer } from 'views/production/configuration/zone/store/reducers';

export const productionReducers = {
  lineReducer,
  SampleTypeReducer,
  ZoneReducer,
  productPartReducer,
  productionProcessReducer,
  rejectTypeReducer,
  incompleteTypeReducer
};
