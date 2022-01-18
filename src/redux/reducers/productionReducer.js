import { criticalProcessReducer } from 'views/production/configuration/criticalProcess/store/reducers';
import { lineReducer } from 'views/production/configuration/line/store/reducers';
import { productionProcessReducer } from 'views/production/configuration/productionProcess/store/reducers';
import { productPartReducer } from 'views/production/configuration/productParts/store/reducers';
import { timeReducer } from 'views/production/configuration/time/store/reducers';
import { incompleteTypeReducer } from 'views/production/configuration/typeManagement/incompleteType/store/reducers';
import { rejectTypeReducer } from 'views/production/configuration/typeManagement/rejectType/store/reducers';
import { sampleTypeReducer } from 'views/production/configuration/typeManagement/sampleType/store/reducers';
import { zoneReducer } from 'views/production/configuration/zone/store/reducers';
import { cutPlanReducer } from 'views/production/operation/cutPlan/store/reducers';

export const productionReducers = {
  lineReducer,
  sampleTypeReducer,
  zoneReducer,
  productPartReducer,
  productionProcessReducer,
  criticalProcessReducer,
  rejectTypeReducer,
  incompleteTypeReducer,
  timeReducer,
  cutPlanReducer
};
