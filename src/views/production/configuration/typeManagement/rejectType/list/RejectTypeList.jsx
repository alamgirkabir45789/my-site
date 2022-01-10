/**
 * Title: RejectType Edit Form
 * Description: RejectType Edit Form
 * Author: Iqbal Hossain
 * Date: 05-January-2022
 * Modified: 05-January-2022
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { PlusIcon } from 'utility/custom/production/icons/CustomIcons';

const RejectTypeListPage = () => {
  const history = useHistory();
  return (
    <div>
      Hello From RejectType List Page
      <PlusIcon
        onClick={() =>
          history.push({
            pathname: `reject-type-new`
          })
        }
      />
    </div>
  );
};

export default RejectTypeListPage;
