/**
 * Title: SewingInspection Edit Form
 * Description: SewingInspection Edit Form
 * Author: Iqbal Hossain
 * Date: 05-January-2022
 * Modified: 05-January-2022
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { PlusIcon } from 'utility/custom/production/icons/CustomIcons';

const SewingInspectionListPage = () => {
  const history = useHistory();

  return (
    <div>
      Hello From SewingInspection List Page
      <PlusIcon
        onClick={() =>
          history.push({
            pathname: `sewing-inspection-new`
          })
        }
      />
    </div>
  );
};

export default SewingInspectionListPage;
