import { Book } from "lucide-react";
import {
  Account,
  Blog,
  Corporate,
  Default,
  Ecommerce,
  OnlineCourses,
  Order,
  Projects,
  Social,
  UserProfile,
} from "../IconSet";

export interface SubItem {
  name: string;
  link: string;
}

export interface DirectoryItem {
  name: string;
  icon: JSX.Element;
  subs: SubItem[];
  link?: string;
}

export const pageDirectory: DirectoryItem[] = [
  {
    name: "User Profile",
    icon: <UserProfile />,
    subs: [
      { name: "Overview", link: "" },
      { name: "Projects", link: "" },
      { name: "Campaigns", link: "" },
      { name: "Documents", link: "" },
      { name: "Followers", link: "" },
    ],
  },
  {
    name: "Account",
    icon: <Account />,
    subs: [
      { name: "Account 1", link: "" },
      { name: "Account 2", link: "" },
      { name: "Account 3", link: "" },
    ],
  },
  {
    name: "Corporate",
    icon: <Corporate />,
    subs: [
      { name: "Corporate 1", link: "" },
      { name: "Corporate 2", link: "" },
      { name: "Corporate 3", link: "" },
    ],
  },
  {
    name: "Blog",
    icon: <Blog />,
    subs: [
      { name: "Blog 1", link: "" },
      { name: "Blog 2", link: "" },
      { name: "Blog 3", link: "" },
    ],
  },
  {
    name: "Social",
    icon: <Social />,
    subs: [
      { name: "Social 1", link: "" },
      { name: "Social 2", link: "" },
      { name: "Social 3", link: "" },
    ],
  },
];

export const dashboardDirectory: DirectoryItem[] = [
  {
    name: "Default",
    icon: <Default />,
    link: "/default",
    subs: [],
  },
  {
    name: "Orders",
    icon: <Order />,
    link: "/orders",
    subs: [],
  },
  {
    name: "Design Doc",
    icon: <Book />,
    link: "/",
    subs: [],
  },
  {
    name: "eCommerce",
    icon: <Ecommerce />,
    subs: [
      { name: "Ecommerce 1", link: "" },
      { name: "Ecommerce 2", link: "" },
      { name: "Ecommerce 3", link: "" },
    ],
  },
  {
    name: "Projects",
    icon: <Projects />,
    subs: [
      { name: "Projects 1", link: "" },
      { name: "Projects 2", link: "" },
      { name: "Projects 3", link: "" },
    ],
  },
  {
    name: "Online Courses",
    icon: <OnlineCourses />,
    subs: [
      { name: "Courses 1", link: "" },
      { name: "Courses 2", link: "" },
      { name: "Courses 3", link: "" },
    ],
  },
];
