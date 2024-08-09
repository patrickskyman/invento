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
        ],
      },
      { path: "/inventory/pos", icon: "form", title: "POS", type: "link", id: 87 },

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
        title: "Variants",
        id: 5,
        icon: "project",
        type: "sub",
        children: [
          { path: "#", title: "Units", type: "link" },
          { path: "#", title: "Variant Attributes", type: "link" },
          { path: "#", title: "Warranties", type: "link" },
          { path: "#", icon: "email", title: "Letter Box", type: "link", id: 7 },
        ],
      },
      {
        title: "Stock",
        id: 9,
        icon: "form",
        type: "sub",
        children: [
          { path: "#", title: "Manage Stock", type: "link" },
          { path: "#", title: "Stock Adjustment", type: "link" },
          { path: "#", title: "Stock Transfer", type: "link" },
          { path: "#", title: "Expired Products", type: "link" },
          { path: "#", title: "Low Stocks", type: "link" },
        ],
      },
      {
        title: "Sales",
        id: 10,
        icon: "table",
        type: "sub",
        children: [
          { path: "#", title: "Sales", type: "link" },
          { path: "#", title: "Invoices", type: "link" },
          { path: "#",  title: "Sales Return", type: "link" },
          { path: "#", title: "Quotation", type: "link" },
          { path: "#", title: "POS", type: "link" },
        ],
      },
      {
        title: "Promo",
        id: 11,
        icon: "ui-kits",
        type: "sub",
        children: [
          { path: "#", title: "Coupons", type: "link" },
        ],
      },
      {
        title: "Purchases",
        id: 12,
        icon: "bonus-kit",
        type: "sub",
        children: [
          { path: "#", title: "Purchases", type: "link" },
          { path: "#",  title: "Purchase Order", type: "link" },
          { path: "#",  title: "Purchase Return", type: "link" },
        ],
      },
      {
        title: "Finance & Accounts",
        id: 13,
        icon: "icons",
        type: "sub",
        children: [
          { path: "#",title: "Expenses", type: "link" },
          { path: "#", title: "Expense Category", type: "link" },
        ],
      },
      {
        title: "People",
        id: 14,
        icon: "button",
        type: "sub",
        children: [
          { path: "#",  title: "Customers", type: "link" },
          { path: "#", title: "Suppliers", type: "link" },
          { path: "#",  title: "Stores", type: "link" },
          { path: "#",  title: "Warehouses", type: "link" },
        ],
      },
      {
        title: "HRM",
        id: 15,
        icon: "learning",
        type: "others",
        children: [
          { path: "#", title: "Employees", type: "link" },
        ],
      },
      {
        title: "Reports",
        id: 16,
        icon: "gallery",
        type: "sub",
        children: [
          { path: "#", title: "Sales Report", type: "link" },
          { path: "#", title: "Purchase Report", type: "link" },
          { path: "#", title: "Inventory Report", type: "link" },
          { path: "#",  title: "Invoice Report", type: "link" },
          { path: "#", title: "Supplier Report", type: "link" },
          { path: "#", title: "Customer Report", type: "link" },
          { path: "#", title: "Expense Report", type: "link" },
          { path: "#",  title: "Income Report", type: "link" },
          { path: "#", title: "Tax Report", type: "link" },
          { path: "#", title: "Profit & Loss", type: "link" },
        ],
      },
      {
        title: "User Management",
        id: 17,
        icon: "blog",
        type: "sub",
        children: [
          { path: "#", title: "Users", type: "link" },
          { path: "#", title: "Roles & Permissions", type: "link" },
          { path: "#",title: "Delete Account Request", type: "link" },
        ],
      },
      {
        title: "Settings",
        id: 18,
        icon: "knowledgebase",
        type: "sub",
        children: [
          { path: "#", title: "General Settings", type: "link" },
          { path: "#",  title: "Website Settings", type: "link" },
          { path: "#",  title: "System Settings", type: "link" },
          { path: "#", title: "Financial Settings", type: "link" },
          { path: "#",  title: "Other Settings", type: "link" },
          { path: "#",  title: "Logout", type: "link" },
        ],
      },



    ],
  },

];
