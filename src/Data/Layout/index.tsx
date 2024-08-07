import { FileText, Mail, Settings, Users } from "react-feather";

export const NotificationData = [
  {
    src: "wallet.png",
    alt: "Wallet",
    title: "New daily offer added",
    text: "New user-only offer added",
    color: "primary",
  },
  {
    src: "ticket-star.png",
    alt: "Ticket-star",
    title: "Confirm order delivery",
    text: "Supplier 1 marked order as delivered",
    color: "tertiary",
  },
  {
    src: "ticket-star.png",
    alt: "Ticket-star",
    title: "Nike sneakers 11",
    text: "Sneakers sells out soon",
    color: "tertiary",
  },
  {
    src: "ticket-star.png",
    alt: "Ticket-star",
    title: "Recently Paid",
    text: "Mastercard payment of Ksh 34000",
    color: "tertiary",
  },
];

export const BookMarkData = [
  {
    icon: "form",
    path:"/forms/form_controls/validation_form",
    title: "Form",
    color: "primary",
  },
  {
    icon: "user",
    path:"/users/user_profile",
    title: "Profile",
    color: "secondary",
  },
  {
    icon: "table",
    path:"/table/reactstrap_table/basic_table",
    title: "Tables",
    color: "warning",
  },
];

const iconOne = `dhhfhf;`;
const iconTwo = `eheh t`;

export const MessageData = [
  {
    image: "1.png",
    title: "supplier",
    color: "primary",
    text: <div dangerouslySetInnerHTML={{ __html: iconOne }}></div>,
    time: "10 min.",
  },
  {
    image: "2.png",
    title: "suppplier",
    color: "secondary",
    text: <p dangerouslySetInnerHTML={{ __html: iconTwo }}></p>,
    time: "25 min.",
  },
  {
    image: "3.png",
    title: "supplier",
    color: "success",
    text: "hjyorder incoming",
    time: "1 hours.",
  },
];

export const cartDetailsList = ["Furniture Chair for Home", "Furniture Table for Office"];

export const UserProfileData = [
  {
    icon: <Users />,
    title: "Account",
    link:"chat/private_chat",
  },
  {
    icon: <Mail />,
    title: "Inbox",
    link:"app/letter_box",
  },
  {
    icon: <FileText />,
    title: "Taskboard",
    link:"app/task",
  },
  {
    icon: <Settings />,
    title: "Settings",
    link:"users/edit_profile",
  },
];
