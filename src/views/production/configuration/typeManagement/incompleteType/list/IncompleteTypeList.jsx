/**
 * Title: IncompleteType Edit Form
 * Description: IncompleteType Edit Form
 * Author: Iqbal Hossain
 * Date: 05-January-2022
 * Modified: 05-January-2022
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { PlusIcon } from 'utility/custom/production/icons/CustomIcons';

const IncompleteTypeListPage = () => {
  const history = useHistory();
  return (
    <div>
      Hello From IncompleteType List Page
      <PlusIcon
        onClick={() =>
          history.push({
            pathname: `incomplete-type-new`
          })
        }
      />
    </div>
  );
};

export default IncompleteTypeListPage;
