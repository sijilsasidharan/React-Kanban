import { SIDEBAR } from "@/config/sidebar.config";
import "./Sidebar.css";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { ThemeSelection } from "./ThemeSelection";
import { SquareKanban, User } from "lucide-react";
import UserDropdown from "@/features/auth/UserDropdown";
import { Link } from "react-router";
import { useRef, useState } from "react";
const SideBar = () => {
  const [isActive, setIsActive] = useState<string>("");
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <div
          className="
          peer/menu-button
          flex w-full items-center gap-2
          overflow-hidden"
        >
          <div className="flex aspect-square size-8 items-center justify-center">
            <SquareKanban />
          </div>
          <span className="flex flex-1 text-left leading-tight">KANBAN</span>

          <div className="flex justify-center items-center gap-2 delay-100">
            <ThemeSelection />
            <UserDropdown />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
        <SidebarGroupContent>
          <SidebarMenu className="px-2 py-1">
            {SIDEBAR.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className="w-full flex justify-left items-center gap-2"
              >
                <SidebarMenuButton asChild isActive={isActive === item.title}>
                  <Link to={item.url} onClick={() => setIsActive(item.title)}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default SideBar;

// rounded-md p-2 text-left outline-none
// ring-sidebar-ring transition-[width,height,padding]
// focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground
// disabled:pointer-events-none disabled:opacity-50
// group-has-[[data-sidebar=menu-action]]/menu-item:pr-8
// aria-disabled:pointer-events-none aria-disabled:opacity-50
// data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium
// data-[active=true]:text-sidebar-accent-foreground
// data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground
// group-data-[collapsible=icon]:!size-8 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0
// hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-12 text-sm group-data-[collapsible=icon]:!p-0
// data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground
