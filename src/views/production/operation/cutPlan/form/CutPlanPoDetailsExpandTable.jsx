import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { ChevronDown } from 'react-feather';
import { useDispatch } from 'react-redux';
import { Card } from 'reactstrap';
import CustomPreLoader from 'utility/custom/CustomPreLoader';
import { cutPlanPoDetailsClupsTablecolumn } from '../list/cutPlanTableColumn';
import { fetchCutPlansByQuery } from '../store/actions';

const CutPlanPoDetailsExpandTable = props => {
  const {
    data: { details }
  } = props;
  const dispatch = useDispatch();

  //#region Effects
  useEffect(() => {
    dispatch(fetchCutPlansByQuery());
  }, [dispatch]);
  //#endregion

  //#region Events

  //#endregion

  return (
    <div>
      <Card>
        <DataTable
          style={{ padding: '0px 60px' }}
          //   progressPending={!details.length}
          progressComponent={<CustomPreLoader />}
          dense
          subHeader={false}
          highlightOnHover
          responsive={true}
          paginationServer
          persistTableHead
          columns={cutPlanPoDetailsClupsTablecolumn}
          sortIcon={<ChevronDown />}
          data={details}
        />
      </Card>
    </div>
  );
};

export default CutPlanPoDetailsExpandTable;
