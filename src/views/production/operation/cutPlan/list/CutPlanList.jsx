/**
 * Title: Cut Plan Edit Form
 * Description: Cut Plan Edit Form
 * Author: Iqbal Hossain
 * Date: 05-January-2022
 * Modified: 05-January-2022
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { PlusIcon } from 'utility/custom/production/icons/CustomIcons';

const CutPlanListPage = () => {
  const history = useHistory();
  return (
    <div>
      Hello From Cut Plan List Page
      <PlusIcon
        onClick={() =>
          history.push({
            pathname: `cut-plan-new`
          })
        }
      />
    </div>
  );
};

export default CutPlanListPage;
