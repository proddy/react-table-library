import * as React from 'react';

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/themes/chakra-ui';
import { Box } from '@chakra-ui/react';

import { DocumentationSee } from '../../../documentation';
import { nodes } from '../../../data';

const key = 'Pin';

const Component = () => {
  const data = { nodes };

  const chakraTheme = getTheme(DEFAULT_OPTIONS);
  const customTheme = {
    BaseCell: `
      &:nth-child(1) {
        left: 0px;

        min-width: 250px;
        width: 250px;
      }

      &:nth-child(2) {
        left: 250px;

        min-width: 150px;
        width: 150px;
      }

      &:nth-child(3) {
        min-width: 20%;
        width: 20%;
      }

      &:nth-child(4), &:nth-child(5) {
        min-width: 700px;
        width: 700px;
      }
    `,
  };
  const theme = useTheme([chakraTheme, customTheme]);

  const COLUMNS = [
    { label: 'Task', renderCell: (item) => item.name, pin: true },
    {
      label: 'Deadline',
      renderCell: (item) =>
        item.deadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
      pin: true,
    },
    { label: 'Type', renderCell: (item) => item.type },
    {
      label: 'Complete',
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: 'Tasks', renderCell: (item) => item.nodes?.length },
  ];

  return (
    <>
      <Box p={3} borderWidth="1px" borderRadius="lg">
        <CompactTable
          columns={COLUMNS}
          data={data}
          theme={theme}
          layout={{ custom: true, horizontalScroll: true }}
        />
      </Box>

      <br />
      <DocumentationSee anchor={'Features/' + key} />
    </>
  );
};

const code = `
import * as React from 'react';

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/themes/chakra-ui';
import { Box } from '@chakra-ui/react';

import { DocumentationSee } from '../../../documentation';
import { nodes } from '../../../data';

const key = 'Pin';

const Component = () => {
  const data = { nodes };

  const chakraTheme = getTheme(DEFAULT_OPTIONS);
  const customTheme = {
    BaseCell: \`
      &:nth-child(1) {
        left: 0px;

        min-width: 250px;
        width: 250px;
      }

      &:nth-child(2) {
        left: 250px;

        min-width: 150px;
        width: 150px;
      }

      &:nth-child(3) {
        min-width: 20%;
        width: 20%;
      }

      &:nth-child(4), &:nth-child(5) {
        min-width: 700px;
        width: 700px;
      }
    \`,
  };
  const theme = useTheme([chakraTheme, customTheme]);

  const COLUMNS = [
    { label: 'Task', renderCell: (item) => item.name, pin: true },
    {
      label: 'Deadline',
      renderCell: (item) =>
        item.deadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
      pin: true,
    },
    { label: 'Type', renderCell: (item) => item.type },
    {
      label: 'Complete',
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: 'Tasks', renderCell: (item) => item.nodes?.length },
  ];

  return (
    <>
      <Box p={3} borderWidth="1px" borderRadius="lg">
        <CompactTable
          columns={COLUMNS}
          data={data}
          theme={theme}
          layout={{ custom: true, horizontalScroll: true }}
        />
      </Box>

      <br />
      <DocumentationSee anchor={'Features/' + key} />
    </>
  );
};
`;

export { key, Component, code };