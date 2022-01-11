import './account/moduleApi';
import './account/roleApi';
import './account/todo';
import './account/userApi';
import './jwt';
import mock from './mock';
import './production/configuration/criticalProcessMock';
import './production/configuration/incompleteTypeMock';
import './production/configuration/lineMock';
import './production/configuration/productionProcessMock';
import './production/configuration/productPartsMock';
import './production/configuration/rejectTypeMock';
import './production/configuration/sampleTypeMock';
import './production/configuration/timeMock';
import './production/configuration/zoneMock';

mock.onAny().passThrough();
