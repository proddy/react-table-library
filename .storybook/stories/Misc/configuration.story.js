/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';

import { nodes } from '../data';

storiesOf('Misc/Configuration (WIP)', module)
  .addParameters({ component: Table })
  .add('documentation', () => (
    <>
      <a href="https://github.com/table-library/react-table-library/tree/master/.storybook/stories">
        Story Code
      </a>
    </>
  ))
  .add('base', () => {
    return <div>IP</div>;
  });
