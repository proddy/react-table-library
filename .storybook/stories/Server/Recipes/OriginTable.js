/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell
} from '@table-library/react-table-library/lib/table';

import { HeaderCellSort } from '@table-library/react-table-library/lib/sort';

import { get } from '../server/list';

storiesOf('07. Server Recipes/ 01. Origin Table', module)
  .addParameters({ component: Table })
  .add('default', () => {
    const [list, setList] = React.useState([]);

    // initial fetching

    const doGet = React.useCallback(async params => {
      setList(await get(params));
    }, []);

    React.useEffect(() => {
      doGet({});
    }, [doGet]);

    // server-side sort

    const handleTableStateChange = React.useCallback(
      (type, tableState, action) => {
        const SERVER_SIDE_OPERATIONS = ['sort'];
        console.log(type, tableState, action);

        if (SERVER_SIDE_OPERATIONS.includes(type)) {
          const params = {
            sortKey: tableState.sort.sortState.key,
            sortReverse: tableState.sort.sortState.reverse
          };

          doGet(params);
        }
      },
      []
    );

    return (
      <Table
        data={{ nodes: list }}
        server={{
          sort: true
        }}
        onTableStateChange={handleTableStateChange}
      >
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort sortKey="name">Name</HeaderCellSort>
                <HeaderCellSort sortKey="stars">Stars</HeaderCellSort>
                <HeaderCellSort sortKey="light">Light</HeaderCellSort>
                <HeaderCellSort sortKey="count">Count</HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(item => (
                <Row key={item.id} item={item}>
                  {tableItem => (
                    <React.Fragment key={tableItem.id}>
                      <Cell>{tableItem.name}</Cell>
                      <Cell>{tableItem.stars}</Cell>
                      <Cell>{tableItem.light.toString()}</Cell>
                      <Cell>{tableItem.count}</Cell>
                    </React.Fragment>
                  )}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    );
  });
