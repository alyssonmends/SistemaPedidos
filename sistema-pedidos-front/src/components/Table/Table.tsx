import {
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import styled from "styled-components";
  
  interface DefaultTableProps {
    data: any[];
    columns: any[];
  }
  
  export function DefaultTable({
    data,
    columns,
  }: DefaultTableProps) {

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });
  
    return (
      <StyledTable>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <STh key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </STh>
                ))}
              </tr>
            ))}
          </thead>
          {data.length ? (
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <STd key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </STd>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </StyledTable>
    );
  }
  
  const STh = styled.th`
    font-size: 1rem;
  `;
  
  const STd = styled.td`
    font-size: 1rem;
  `;


export const StyledTable = styled.div`
  table {
    width: 100%;
    letter-spacing: 0.5px;
  }

  thead {
    font-weight: normal;
    height: 2rem;
    color: ${({ theme }) => theme.colors.white};
  }

  th {
    text-align: left;
    padding: 1rem;
    border-bottom: 0.25px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
  }

  td{
    text-align: left;
    padding: 1rem;
    border-bottom: 0.25px solid
    ${({ theme }) => theme.colors.primary};
  }

  tbody {
    tr {
      border-bottom: 0.25px solid
        ${({ theme }) => theme.colors.primary};
    }
  }

  td {
    height: 1rem;
    color: ${({ theme }) => theme.colors.gray};
    max-width: auto;
  }
`;