import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { TopSellerTableBodyType } from "@/Types/DashboardType";
import Link from "next/link";
import { Input, Label } from "reactstrap";

const TopSellerTableBody: React.FC<TopSellerTableBodyType> = ({ currentItems }) => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);

  return (
    <tbody>
      {currentItems.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="form-check">
              <Input type="checkbox" />
              <Label check />
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <div className="flex-grow-1">
                <Link href={`#`}>
                  <h6>{data.name}</h6>
                </Link>
              </div>
            </div>
          </td>
          <td>{data.brand}</td>
          <td>{data.sold}</td>
          <td>
            <p>Ksh {data.price}</p>
          </td>
          <td>Ksh {data.earning}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TopSellerTableBody;
