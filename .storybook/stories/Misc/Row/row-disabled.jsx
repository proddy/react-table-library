import * as React from 'react';

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';

import { nodes } from '../../data';

const Component = () => {
  const data = { nodes };

  return (
    <Table data={data}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Task</HeaderCell>
              <HeaderCell>Deadline</HeaderCell>
              <HeaderCell>Type</HeaderCell>
              <HeaderCell>Complete</HeaderCell>
              <HeaderCell>Tasks</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row
                disabled
                key={item.id}
                item={item}
                onClick={(item, event) => console.log('Single Click Row', item, event)}
                onDoubleClick={(item, event) => console.log('Double Click Row', item, event)}
              >
                <Cell>{item.name}</Cell>
                <Cell>
                  {item.deadline.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </Cell>
                <Cell>{item.type}</Cell>
                <Cell>{item.isComplete.toString()}</Cell>
                <Cell>{item.nodes?.length}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};

export default Component;
