import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { CompactTable, CompactTableProps } from '@table-library/react-table-library/compact';

import * as BaseStory from './base';
import * as ThemeStory from './theme';
import * as LayoutStory from './layout';
import * as ResizeStory from './resize';
import * as SortStory from './sort';
import * as SearchStory from './search';
import * as FilterStory from './filter';
import * as SelectStory from './select';
import * as TreeStory from './tree';
import * as ExpandStory from './expand';
import * as PaginationStory from './pagination';
import * as FixedHeaderStory from './fixed-header';
import * as HorizontalScrollStory from './horizontal-scroll';
import * as PinStory from './pin';
import * as TenThousandRowsStory from './thousand-rows';
// import * as DataGridStory from './data-grid';
import * as ColumnHideStory from './column-hide';
import * as ColumnOrderStory from './column-order';
import * as ColumnGroupStory from './column-group';

const stories = [
  BaseStory,
  ThemeStory,
  LayoutStory,
  ResizeStory,
  SortStory,
  SearchStory,
  FilterStory,
  SelectStory,
  TreeStory,
  ExpandStory,
  PaginationStory,
  FixedHeaderStory,
  HorizontalScrollStory,
  PinStory,
  TenThousandRowsStory,
  // DataGridStory,
  ColumnHideStory,
  ColumnOrderStory,
  ColumnGroupStory,
];

const storyContainer = storiesOf('Compact Table', module).addParameters({
  component: CompactTable,
});

stories.forEach((story) => {
  storyContainer.add(story.key, story.Component, {
    docs: { source: { code: story.code || '' } },
  });
});