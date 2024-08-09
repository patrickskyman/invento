import { MenuItem } from "@/Types/LayoutTypes";

export const MenuList: MenuItem[] | undefined = [
  {
    title: "Invento",
    menucontent: "Dashboards,Widgets",
    Items: [
      { path: "/dashboard/invento", icon: "home", title: "Dashboard", type: "link" },
      {
        title: "Inventory",
        id: 2,
        icon: "widget",
        type: "sub",
        active: false,
        children: [
          { path: "/inventory/add_product", title: "Add Product", type: "link" },
          { path: "/inventory/product_list", title: "Product List", type: "link" },
          { path: "/inventory/expired-products", title: "Expired Products", type: "link" },
          { path: "/inventory/low-stocks", title: "Low Stocks", type: "link" },
        ],
      },
      { path: "", icon: "email", title: "Letter Box", type: "link", id: 7 },
      { path: "/inventory/pos", icon: "form", title: "POS", type: "link", id: 87 },
      {
        title: "Variants",
        id: 5,
        icon: "project",
        type: "sub",
        children: [
          { path: "/inventory/units", title: "Units", type: "link" },
          { path: "/inventory/variant-attributes", title: "Variant Attributes", type: "link" },
          { path: "/inventory/warranties", title: "Warranties", type: "link" },
        ],
      },
      {
        title: "Printing",
        id: 8,
        icon: "ecommerce",
        type: "sub",
        children: [
          { path: "/inventory/print-barcode", title: "Print Barcode", type: "link", id: 799 },
          { path: "/inventory/print-qr-code", title: "Print QR Code", type: "link", id:3535 },
        ],
      },
      {
        title: "Stock",
        id: 9,
        icon: "form",
        type: "sub",
        children: [
          { path: "/stock/manage-stock", title: "Manage Stock", type: "link" },
          { path: "/stock/stock-adjustment", title: "Stock Adjustment", type: "link" },
          { path: "/stock/stock-transfer", title: "Stock Transfer", type: "link" },
        ],
      },
      {
        title: "Sales",
        id: 10,
        icon: "table",
        type: "sub",
        children: [
          { path: "/sales/sales", title: "Sales", type: "link" },
          { path: "/sales/invoices", title: "Invoices", type: "link" },
          { path: "/sales/sales-return",  title: "Sales Return", type: "link" },
          { path: "/sales/quotation", title: "Quotation", type: "link" },
          { path: "/sales/pos", title: "POS", type: "link" },
        ],
      },
      {
        title: "Promo",
        id: 11,
        icon: "ui-kits",
        type: "sub",
        children: [
          { path: "/promo/coupons", title: "Coupons", type: "link" },
        ],
      },
      {
        title: "Purchases",
        id: 12,
        icon: "bonus-kit",
        type: "sub",
        children: [
          { path: "/purchases/purchases", title: "Purchases", type: "link" },
          { path: "/purchases/purchase-order",  title: "Purchase Order", type: "link" },
          { path: "/purchases/purchase-return",  title: "Purchase Return", type: "link" },
        ],
      },
      {
        title: "Finance & Accounts",
        id: 13,
        icon: "icons",
        type: "sub",
        children: [
          { path: "/expenses",title: "Expenses", type: "link" },
          { path: "/expense-category", title: "Expense Category", type: "link" },
        ],
      },
      {
        title: "People",
        id: 14,
        icon: "button",
        type: "sub",
        children: [
          { path: "/peoples/customers",  title: "Customers", type: "link" },
          { path: "/peoples/suppliers", title: "Suppliers", type: "link" },
          { path: "/peoples/stores",  title: "Stores", type: "link" },
          { path: "/peoples/warehouses",  title: "Warehouses", type: "link" },
        ],
      },
      {
        title: "HRM",
        id: 15,
        icon: "learning",
        type: "others",
        children: [
          { path: "/employees", title: "Employees", type: "link" },
        ],
      },
      {
        title: "Reports",
        id: 16,
        icon: "gallery",
        type: "sub",
        children: [
          { path: "/reports/sales", title: "Sales Report", type: "link" },
          { path: "/reports/purchase", title: "Purchase Report", type: "link" },
          { path: "/reports/inventory", title: "Inventory Report", type: "link" },
          { path: "/reports/invoice",  title: "Invoice Report", type: "link" },
          { path: "/reports/supplier", title: "Supplier Report", type: "link" },
          { path: "/reports/customer", title: "Customer Report", type: "link" },
          { path: "/reports/expense", title: "Expense Report", type: "link" },
          { path: "/reports/income",  title: "Income Report", type: "link" },
          { path: "/reports/tax", title: "Tax Report", type: "link" },
          { path: "/reports/profit-loss", title: "Profit & Loss", type: "link" },
        ],
      },
      {
        title: "User Management",
        id: 17,
        icon: "blog",
        type: "sub",
        children: [
          { path: "/user-management/users", title: "Users", type: "link" },
          { path: "/user-management/roles-permissions", title: "Roles & Permissions", type: "link" },
          { path: "/user-management/delete-account-request",title: "Delete Account Request", type: "link" },
        ],
      },
      {
        title: "Settings",
        id: 18,
        icon: "knowledgebase",
        type: "sub",
        children: [
          { path: "/settings/general", title: "General Settings", type: "link" },
          { path: "/settings/website",  title: "Website Settings", type: "link" },
          { path: "/settings/system",  title: "System Settings", type: "link" },
          { path: "/settings/financial", title: "Financial Settings", type: "link" },
          { path: "/settings/other",  title: "Other Settings", type: "link" },
          { path: "/auth/login",  title: "Logout", type: "link" },
        ],
      },



    ],
  },

];
