import { Input, Label, Table } from "reactstrap";
import TopSellerTableBody from "./TopSellerTableBody";
import PaginationDynamic from "@/utils/Paginations";
import { useMemo, useState } from "react";

const TopSellerTable = ({ topSellers }: { topSellers: any[] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalItems = topSellers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return topSellers.slice(startIndex, endIndex);
  }, [currentPage, topSellers]);

  return (
    <div className="table-responsive theme-scrollbar dataTables_wrapper">
      <Table className="display dataTable" id="seller-month">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <Input type="checkbox" />
                <Label check />
              </div>
            </th>
            <th>Product</th>
            <th>Brand</th>
            <th>Sold</th>
            <th>Price</th>
            <th>Earnings</th>
          </tr>
        </thead>
        <TopSellerTableBody currentItems={currentItems} />
      </Table>
      <div className="pe-3">
        <PaginationDynamic totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default TopSellerTable;
