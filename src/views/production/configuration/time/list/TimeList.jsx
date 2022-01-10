/**
 * Title: Time Edit Form
 * Description: Time Edit Form
 * Author: Iqbal Hossain
 * Date: 05-January-2022
 * Modified: 05-January-2022
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { PlusIcon } from 'utility/custom/production/icons/CustomIcons';

const TimeListPage = () => {
  const history = useHistory();
  return (
    <div>
      Hello From Time List Page
      <PlusIcon
        onClick={() =>
          history.push({
            pathname: `time-new`
          })
        }
      />
    </div>
  );
};

export default TimeListPage;
