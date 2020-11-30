import styled from 'styled-components';

import * as COLORS from '@colors';

const GUTTER_INNER = 12;
const GUTTER_OUTER = 8;

const CellContainerBase = styled.div`
  width: ${props => props.width};

  padding-top: 4px;
  padding-bottom: 4px;

  & > div {
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:first-child > div {
    padding-left: ${GUTTER_OUTER}px;
  }

  & > div {
    padding-right: ${GUTTER_INNER}px;
  }

  &:last-child > div {
    padding-right: ${GUTTER_OUTER}px;
  }

  & > div {
    margin-left: ${({ indentation = 0 }) => 20 + indentation}px;
  }

  &:first-child > div {
    margin-left: ${({ indentation = 0 }) => 0 + indentation}px;
  }

  border-right: 1px solid ${COLORS.BORDER};

  &:last-child {
    border-right: 1px solid transparent;
  }

  &.shrink {
    padding-right: ${GUTTER_OUTER}px;
    padding-left: ${GUTTER_OUTER}px;
  }

  ${({ css }) => css};
`;

const CellContainer = styled(CellContainerBase)``;

const HeaderCellContainer = styled(CellContainerBase)``;

export { CellContainerBase, CellContainer, HeaderCellContainer };
