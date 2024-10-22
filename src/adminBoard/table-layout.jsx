import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../shadcn/ui/table";
  import { Button } from "../shadcn/ui/button";
  
  const TableLayout = ({ content_ar, headers, renderRow, actions }) => {
    return (
      <div className="overflow-x-auto">
        <Table className="min-w-full table-auto border-collapse border border-gray-200 bg-[#424242]">
          <TableHeader className="text-gray-900">
            <TableRow>
              {headers.map((header) => (
                <TableHead
                  key={header}
                  className="px-4 py-2 border border-gray-200 text-left"
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {content_ar.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={headers.length}
                  className="px-4 py-2 border border-gray-200 text-center"
                >
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              content_ar.map((item) => (
                <TableRow key={item.id} className="bg-transparent text-white">
                  {renderRow(item)}
                  <TableCell className="px-4 py-2 border border-gray-200 flex space-x-2">
                    {actions(item)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default TableLayout;
  