import { faChartSimple } from "@fortawesome/free-solid-svg-icons/faChartSimple";
import { faTable } from "@fortawesome/free-solid-svg-icons/faTable";
import { Table } from "@mynaui/icons-react";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

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
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
