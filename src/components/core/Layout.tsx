import React from "react";
import { Outlet, Route, Routes } from "react-router";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import Dashboard from "@/pages/Dashboard";
import Inbox from "@/pages/Inbox";
import SideBar from "./SideBar";
import KanbanBoard from "@/pages/KanbanBoard";
import Settings from "@/pages/Settings";
import AppBreadcrumbs from "../common/AppBreadcrumbs";

const Layout: React.FC = () => {
  return (
    <SidebarProvider>
      <SideBar />
      <main className="w-full p-1">
        <section className="h-8 flex justify-start items-center gap-3">
          <SidebarTrigger />
          <AppBreadcrumbs />
        </section>
        <section className="h-auto mt-1">
          <Outlet />
        </section>
      </main>
    </SidebarProvider>
  );
};

export default Layout;
