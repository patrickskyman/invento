// RecentOrdersBody.js
import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { RecentOrdersBodyType } from "@/Types/DashboardType";
import Link from "next/link";
import { Button, Input, Label } from "reactstrap";

const RecentOrdersBody = ({ currentItems, salesData, productsData }) => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);

  const calculateTotalPrice = (order) => {
    return order.products.reduce((total, productId) => {
      const productSales = salesData.filter(sale => sale.product === productId);
      const product = productsData.find(p => p.id === productId);
      const productTotal = productSales.reduce((sum, sale) => sum + (product ? product.selling_price * sale.quantity : 0), 0);
      return total + productTotal;
    }, 0);
  };

  return (
    <tbody>
      {currentItems.map((order, i) => (
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
                <Link href={`/ecommerce/checkout`}><h6>Order #{order.id}</h6></Link>
              </div>
            </div>
          </td>
          <td>{new Date(order.created_at).toLocaleDateString()}</td>
          <td>QTY:{order.products.length}</td>
          <td className="customer-img">
            <div className="d-flex align-items-center gap-2">
              <div className="flex-grow-1">
                <h6>{order.customer_name}</h6>
              </div>
            </div>
          </td>
          <td>
            <p>Ksh{calculateTotalPrice(order).toFixed(2)}</p>
          </td>
          <td>
            <div className="status-box">
              <Button className={`background-light-${order.fulfilled ? "success" : "danger"} font-${order.fulfilled ? "success" : "danger"} f-w-500`} color="transparent">
                {order.fulfilled ? "Fulfilled" : "Pending"}
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default RecentOrdersBody;
