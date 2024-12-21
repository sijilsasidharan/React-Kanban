import { faChartSimple } from "@fortawesome/free-solid-svg-icons/faChartSimple";
import { faTable } from "@fortawesome/free-solid-svg-icons/faTable";
import { Table } from "@mynaui/icons-react";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  GaugeCircle,
  Kanban,
} from "lucide-react";

// export const SIDEBAR = [
//   {
//     name: "Kanban View",
//     icon: faChartSimple,
//   },
//   {
//     name: "Table View",
//     icon: Table,
//   },
// ];

export const SIDEBAR = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: GaugeCircle,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Boards",
    url: "/boards",
    icon: Kanban,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];
