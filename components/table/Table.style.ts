import styled from "@emotion/styled";
import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

export const StyledTableContainer = styled.div`
  overflow-x: scroll;
  &::-webkit-scrollbar-track {
    background: ${colorPalette.white};
  }
  &::-webkit-scrollbar {
    width: ${getSpacing(0.5)};
    height: ${getSpacing(1)};
  }
  &::-webkit-scrollbar-thumb {
    background: ${colorPalette.grey};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${colorPalette.doveGrey};
  }
`;
export const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  min-width: ${getSpacing(505)};
  & thead {
    display: block;
    border-bottom: ${getSpacing(1)} solid ${colorPalette.dustyGrey};
  }
  & tbody {
    display: block;
  }
`;

export const TableRow = styled.tr<{ withClick?: boolean }>`
  display: flex;
`;

export const TableHeadCell = styled.th`
  font-size: ${fontSize.small};
  color: ${colorPalette.ebonyClay};
  padding: ${getSpacing(8, 0)};
  margin: 0;
  flex: 2;
  font-weight: ${fontWeight.normal};
  cursor: pointer;
  &:first-child {
    text-align: left;
    flex: 3;
    margin-inline-start: ${getSpacing(12)};
  }
`;

export const TableBodyCell = styled.td`
  text-align: center;
  padding: ${getSpacing(13, 0)};
  flex: 2;
  font-size: ${fontSize.medium};
  color: ${colorPalette.doveGrey};
  &:first-child {
    text-align: left;
    flex: 3;
    margin-inline-start: ${getSpacing(12)};
  }
`;

export const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${getSpacing(2)};
  align-items: center;
`;

export const StyledHeading = styled.div<{ canSort: boolean }>`
  width: ${(props) => (props.canSort ? "auto" : "100%")};
`;

export const StyledPlaceHolder = styled.div`
  text-align: center;
  margin-top: ${getSpacing(28)};
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.small};
  color: ${colorPalette.doveGrey};
`;
