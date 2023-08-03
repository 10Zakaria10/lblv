import type { FC } from "react";
import type { Column } from "react-table";
import { useExpanded, useSortBy, useTable } from "react-table";
import SortIndicator from "~components/sortIndicator";
import {
  StyledHeadingContainer,
  StyledHeading,
  StyledTable,
  TableBodyCell,
  TableHeadCell,
  TableRow,
  StyledTableContainer,
  StyledPlaceHolder,
} from "./Table.style";

interface IExposureTableProps {
  data?: any[];
  columns: Array<Column<any>>;
  placeholder: string;
  onRowClick?: (id: string) => void;
}

const ExposureTable: FC<IExposureTableProps> = ({
  data = [],
  columns,
  placeholder,
  onRowClick,
}) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded,
  );
  const handeleRowClick = (id: string) => {
    onRowClick && onRowClick(id);
  };
  return (
    <StyledTableContainer>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <TableRow
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
            >
              {headerGroup.headers.map((column) => (
                <TableHeadCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                >
                  <StyledHeadingContainer>
                    <StyledHeading canSort={column.canSort}>
                      {column.render("Header")}
                    </StyledHeading>
                    {column.canSort && (
                      <SortIndicator
                        isSorted={column.isSorted}
                        isSortedDesc={column.isSortedDesc}
                      />
                    )}
                  </StyledHeadingContainer>
                </TableHeadCell>
              ))}
            </TableRow>
          ))}
        </thead>
        <tbody>
          {rows.length === 0 && (
            <StyledPlaceHolder>{placeholder}</StyledPlaceHolder>
          )}
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow
                {...row.getRowProps()}
                key={row.id}
                onClick={() => handeleRowClick((row.original as any).id)}
              >
                {row.cells.map((cell) => (
                  <TableBodyCell
                    {...cell.getCellProps()}
                    key={cell.getCellProps().key}
                  >
                    {cell.render("Cell")}
                  </TableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default ExposureTable;
