/**
 * Title: CriticalProcess Edit Form
 * Description: CriticalProcess Edit Form
 * Author: Iqbal Hossain
 * Date: 05-January-2022
 * Modified: 05-January-2022
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { PlusIcon } from 'utility/custom/production/icons/CustomIcons';

const CriticalProcessListPage = () => {
  const history = useHistory();
  return (
    <div>
      Hello From CriticalProcess List Page
      <PlusIcon
        onClick={() =>
          history.push({
            pathname: `critical-process-new`
          })
        }
      />
    </div>
  );
};

export default CriticalProcessListPage;
